(() => {
 let user=null,csrfToken='',records={},queue=Promise.resolve(),pending=0,failures=new Map(),inFlight=new Set();
 const clone=v=>JSON.parse(JSON.stringify(v));
 function status(text,failed=false){const el=document.querySelector('#save-status');if(el){el.textContent=text;el.classList.toggle('save-failed',failed)}}
 async function api(path,options={}){const response=await fetch('/api'+path,{credentials:'same-origin',...options,headers:{'Content-Type':'application/json',...(csrfToken?{'X-CSRF-Token':csrfToken}:{}),...options.headers}});const data=await response.json().catch(()=>({error:'The service is temporarily unavailable. Please try again shortly.'}));if(!response.ok){const e=Object.assign(new Error(data.error||'Request failed.'),{status:response.status});if(response.status===401&&user)status('Session expired · sign in again',true);throw e}return data}
 const account={
 async boot(){try{const result=await api('/auth/me');user=result.user;csrfToken=result.csrfToken;records=(await api('/courses')).courses;status('All changes saved');return user}catch(e){if(e.status===401)return null;throw e}},
 async authenticate(mode,values){const result=await api('/auth/'+mode,{method:'POST',body:JSON.stringify(values)});user=result.user;csrfToken=result.csrfToken;records=(await api('/courses')).courses;return result},
 get user(){return user},read(id){return clone(records[id]?.state||{})},get saving(){return pending>0},
 save(id,state){const snapshot=clone(state),owner=user.id;pending++;inFlight.add(id);status('Saving…');const operation=queue.then(async()=>{if(user?.id!==owner)throw new Error('Account changed. Reload before saving.');if(failures.get(id)?.status===409)throw failures.get(id);const result=await api('/courses/'+encodeURIComponent(id),{method:'PUT',body:JSON.stringify({state:snapshot,revision:records[id]?.revision||0})});records[id]={state:snapshot,revision:result.revision};failures.delete(id);return result});queue=operation.catch(e=>{failures.set(id,e)});return operation.finally(()=>{pending--;if(!pending){inFlight.clear();status(failures.size?'Save failed · export draft, then retry or reload':'All changes saved',!!failures.size)}})},
 async flush(){await queue;if(failures.size)throw [...failures.values()][0]},
 async updateName(displayName){const result=await api('/profile',{method:'PATCH',body:JSON.stringify({displayName})});user=result.user;return user},
 async logout(){await account.flush();await api('/auth/logout',{method:'POST',body:'{}'});user=null;csrfToken='';records={};location.reload()},
 async exportAll(drafts={}){await queue;const data=await api('/export');if(failures.size||pending)data.unsavedDrafts=clone(drafts);return data},
 status
 };
 window.Account=account;
 window.addEventListener('beforeunload',e=>{if(pending||failures.size){e.preventDefault();e.returnValue=''}});
 window.addEventListener('online',()=>status(pending?'Saving…':failures.size?'Connection restored · retry your pending save':'All changes saved',!!failures.size));
 window.addEventListener('offline',()=>status('Offline · changes require a connection',true));
})();
