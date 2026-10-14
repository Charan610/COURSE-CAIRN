import {readFile} from 'node:fs/promises';
import {randomUUID} from 'node:crypto';
import {database} from '../lib/database.mjs';
import {randomToken,hashToken,hashPassword,verifyPassword,checkPassword,checkUsername,checkName} from '../lib/security.mjs';
import {buildAssistantContext,validateAssistantRequest,answerAssistant} from '../lib/assistant.mjs';
import {validateState} from '../lib/state.mjs';
let contentPromise;
async function content(){return contentPromise??= (async()=>{const catalog=JSON.parse(await readFile(new URL('../content/catalog.json',import.meta.url)));const courses=new Map();for(const c of catalog.courses)courses.set(c.id,JSON.parse(await readFile(new URL(`../content/${c.curriculum}`,import.meta.url))));return {catalog,courses}})()}
const fail=(status,message)=>{throw Object.assign(new Error(message),{status})};
const publicUser=u=>({id:u.id,username:u.username,displayName:u.display_name,createdAt:u.created_at,updatedAt:u.updated_at});
function send(res,status,data){res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');res.end(JSON.stringify(data))}
async function body(req){if(req.body!==undefined){const value=typeof req.body==='string'?JSON.parse(req.body):req.body;if(Buffer.byteLength(JSON.stringify(value))>800000)fail(413,'Request too large.');return value}let text='';for await(const part of req){text+=part;if(Buffer.byteLength(text)>800000)fail(413,'Request too large.')}try{return text?JSON.parse(text):{}}catch{fail(400,'Invalid JSON.')}}
function origin(req){const expected=process.env.APP_ORIGIN||(process.env.NODE_ENV!=='production'?`http://${req.headers.host}`:null);if(!expected)fail(503,'APP_ORIGIN is not configured.');return expected}
function cookie(req){const name=process.env.NODE_ENV==='production'?'__Host-coursecairn':'coursecairn';const value=(req.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith(name+'='))?.slice(name.length+1);return value&&/^[A-Za-z0-9_-]{43}$/.test(value)?value:null}
function setCookie(res,token,clear=false){const prod=process.env.NODE_ENV==='production';res.setHeader('Set-Cookie',`${prod?'__Host-coursecairn':'coursecairn'}=${clear?'':token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${clear?0:60*60*24*7}${prod?'; Secure':''}`)}
async function session(req){const token=cookie(req);if(!token)fail(401,'Sign in to continue.');const {rows}=await database().query('SELECT s.token_hash,s.csrf_token,u.* FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.expires_at>now()',[hashToken(token)]);if(!rows[0])fail(401,'Your session expired. Sign in again.');return rows[0]}
async function rateLimit(bucket,max,seconds){const {rows}=await database().query(`INSERT INTO rate_limits(bucket,count,expires_at) VALUES($1,1,now()+$2*interval '1 second') ON CONFLICT(bucket) DO UPDATE SET count=CASE WHEN rate_limits.expires_at<now() THEN 1 ELSE rate_limits.count+1 END,expires_at=CASE WHEN rate_limits.expires_at<now() THEN now()+$2*interval '1 second' ELSE rate_limits.expires_at END RETURNING count`,[hashToken(bucket),seconds]);if(rows[0].count>max)fail(429,'Too many attempts. Try again in a few minutes.')}
async function createSession(res,user){const token=randomToken(),csrf=randomToken();await database().query('INSERT INTO sessions(token_hash,user_id,csrf_token,expires_at) VALUES($1,$2,$3,now()+interval \'7 days\')',[hashToken(token),user.id,csrf]);setCookie(res,token);return {user:publicUser(user),csrfToken:csrf}}
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
 try{
 const url=new URL(req.url,'http://local');const path=url.pathname==='/api/index'?'/api/'+(url.searchParams.get('path')||''):url.pathname;
 const write=!['GET','HEAD'].includes(req.method);
 if(write){if(req.headers.origin!==origin(req))fail(403,'Request origin is not allowed.');if(!String(req.headers['content-type']||'').startsWith('application/json'))fail(415,'Use JSON for this request.')}
 if(path==='/api/health'&&req.method==='GET'){await database().query('SELECT version FROM schema_migrations LIMIT 1');return send(res,200,{status:'ok'})}
 if(['/api/auth/register','/api/auth/login','/api/auth/recover'].includes(path)&&req.method==='POST'){
 const b=await body(req),username=checkUsername(b.username);const ip=process.env.VERCEL?String(req.headers['x-vercel-forwarded-for']||'unknown').split(',')[0]:req.socket?.remoteAddress||'local';await rateLimit('auth:ip:'+ip,40,900);await rateLimit('auth:user:'+username,10,900);
 if(path.endsWith('/register')){const name=checkName(b.displayName),password=checkPassword(b.password),recovery=randomToken();const encoded=await hashPassword(password);let user;try{({rows:[user]}=await database().query('INSERT INTO users(id,username,display_name,password_hash,recovery_hash) VALUES($1,$2,$3,$4,$5) RETURNING *',[randomUUID(),username,name,encoded,hashToken(recovery)]))}catch(e){if(e.code==='23505')fail(409,'That username is already taken. Choose another.');throw e}return send(res,201,{...await createSession(res,user),recoveryCode:recovery})}
 const {rows:[user]}=await database().query('SELECT * FROM users WHERE username=$1',[username]);
 if(path.endsWith('/recover')){checkPassword(b.password);if(typeof b.recoveryCode!=='string'||b.recoveryCode.length>100||!user||hashToken(b.recoveryCode)!==user.recovery_hash)fail(401,'Username or recovery code is incorrect.');const recovery=randomToken(),encoded=await hashPassword(b.password);const client=await database().connect();try{await client.query('BEGIN');const r=await client.query('UPDATE users SET password_hash=$1,recovery_hash=$2,updated_at=now() WHERE id=$3 AND recovery_hash=$4 RETURNING *',[encoded,hashToken(recovery),user.id,hashToken(b.recoveryCode)]);if(!r.rows[0])fail(401,'Recovery code was already used.');await client.query('DELETE FROM sessions WHERE user_id=$1',[user.id]);await client.query('COMMIT');return send(res,200,{...await createSession(res,r.rows[0]),recoveryCode:recovery})}catch(e){await client.query('ROLLBACK');throw e}finally{client.release()}}
 if(typeof b.password!=='string'||b.password.length>128)fail(401,'Username or password is incorrect.');const fake='0'.repeat(32)+':'+ '0'.repeat(128);const valid=await verifyPassword(b.password,user?.password_hash||fake);if(!user||!valid)fail(401,'Username or password is incorrect.');return send(res,200,await createSession(res,user));
 }
 const user=await session(req);if(write&&req.headers['x-csrf-token']!==user.csrf_token)fail(403,'Session verification failed. Refresh and try again.');
 if(write)await rateLimit('write:'+user.id,600,60);
 if(path==='/api/assistant'&&req.method==='POST'){
 const loaded=await content(),b=validateAssistantRequest(await body(req),loaded.courses);
 await rateLimit('assistant:'+user.id,20,3600);
 const {rows}=await database().query('SELECT course_id,state FROM course_states WHERE user_id=$1',[user.id]);
 const context=buildAssistantContext({...loaded,rows,user,...b});
 return send(res,200,await answerAssistant(b,context));
 }
 if(path==='/api/auth/me'&&req.method==='GET')return send(res,200,{user:publicUser(user),csrfToken:user.csrf_token});
 if(path==='/api/auth/logout'&&req.method==='POST'){await database().query('DELETE FROM sessions WHERE token_hash=$1',[user.token_hash]);setCookie(res,'',true);return send(res,200,{ok:true})}
 if(path==='/api/profile'&&req.method==='PATCH'){const b=await body(req);const {rows:[updated]}=await database().query('UPDATE users SET display_name=$1,updated_at=now() WHERE id=$2 RETURNING *',[checkName(b.displayName),user.id]);return send(res,200,{user:publicUser(updated)})}
 if(path==='/api/courses'&&req.method==='GET'){const {rows}=await database().query('SELECT course_id,state,revision,updated_at FROM course_states WHERE user_id=$1',[user.id]);return send(res,200,{courses:Object.fromEntries(rows.map(r=>[r.course_id,{state:r.state,revision:r.revision,updatedAt:r.updated_at}]))})}
 if(path.startsWith('/api/courses/')&&req.method==='PUT'){
 const id=decodeURIComponent(path.slice('/api/courses/'.length)),{courses}=await content();if(!courses.has(id))fail(404,'Course does not exist.');const b=await body(req);if(!Number.isInteger(b.revision)||b.revision<0)fail(400,'A valid revision is required.');const state=validateState(b.state,courses.get(id));
 const {rows}=await database().query(`INSERT INTO course_states(user_id,course_id,state,revision) SELECT $1,$2,$3,1 WHERE $4=0 ON CONFLICT(user_id,course_id) DO NOTHING RETURNING revision`,[user.id,id,state,b.revision]);let revision=rows[0]?.revision;
 if(revision===undefined){const r=await database().query('UPDATE course_states SET state=$1,revision=revision+1,updated_at=now() WHERE user_id=$2 AND course_id=$3 AND revision=$4 RETURNING revision',[state,user.id,id,b.revision]);revision=r.rows[0]?.revision}
 if(revision===undefined)fail(409,'This course was updated in another tab or device. Export your unsaved changes, then reload to get the latest version.');return send(res,200,{revision});
 }
 if(path==='/api/export'&&req.method==='GET'){const {rows}=await database().query('SELECT course_id,state,revision,updated_at FROM course_states WHERE user_id=$1 ORDER BY course_id',[user.id]);res.setHeader('Content-Disposition','attachment; filename="coursecairn-account-export.json"');return send(res,200,{schemaVersion:1,exportedAt:new Date().toISOString(),profile:publicUser(user),courses:rows.map(r=>({courseId:r.course_id,state:r.state,revision:r.revision,updatedAt:r.updated_at}))})}
 fail(404,'API route not found.');
 }catch(error){const status=error.status||500;if(status===500)console.error('API error',error.code||error.name);send(res,status,{error:status===500?'The server could not complete this request. Try again.':error.message})}
}
