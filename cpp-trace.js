/* A bounded C++ teaching subset interpreter. Never evals JavaScript or runs native code. */
(()=>{
 const examples={
 'merge-append':`#include <vector>\n#include <algorithm>\n#include <iostream>\nusing namespace std;\n\nint main() {\n    vector<int> nums1 = {1, 2, 3, 0, 0, 0};\n    vector<int> nums2 = {2, 5, 6};\n    int m = 3, n = 3;\n    for (int i = 0; i < n; i++) {\n        nums1[m + i] = nums2[i];\n    }\n    sort(nums1.begin(), nums1.end());\n    for (int i = 0; i < m + n; i++) {\n        cout << nums1[i] << " ";\n    }\n    return 0;\n}`,
 'merge-pointers':`#include <vector>\n#include <iostream>\nusing namespace std;\n\nint main() {\n    vector<int> nums1 = {1, 2, 3, 0, 0, 0};\n    vector<int> nums2 = {2, 5, 6};\n    int m = 3, n = 3;\n    int i = m - 1, j = n - 1, k = m + n - 1;\n    while (j >= 0) {\n        if (i >= 0 && nums1[i] > nums2[j]) {\n            nums1[k] = nums1[i];\n            i--;\n        } else {\n            nums1[k] = nums2[j];\n            j--;\n        }\n        k--;\n    }\n    for (int p = 0; p < m + n; p++) {\n        cout << nums1[p] << " ";\n    }\n    return 0;\n}`,
 binary:`#include <vector>\n#include <iostream>\nusing namespace std;\nint main() {\n    vector<int> a = {1, 2, 2, 5, 8};\n    int target = 2;\n    int lo = 0, hi = a.size();\n    while (lo < hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] < target) lo = mid + 1;\n        else hi = mid;\n    }\n    int result = -1;\n    if (lo < a.size() && a[lo] == target) result = lo;\n    cout << result;\n    return 0;\n}`,
 sorting:`#include <vector>\n#include <algorithm>\n#include <iostream>\nusing namespace std;\nint main() {\n    vector<int> a = {7, 3, 5, 1};\n    for (int i = 1; i < a.size(); i++) {\n        int j = i;\n        while (j > 0 && a[j - 1] > a[j]) {\n            swap(a[j - 1], a[j]);\n            j--;\n        }\n    }\n    for (int i = 0; i < a.size(); i++) cout << a[i] << " ";\n    return 0;\n}`
 };
 function run(source){
  let tokens=[],pos=0,events=[],stdout='',steps=0,ids=new WeakMap(),nextId=1,depth=0,traceBytes=0;
  const fail=(message,line=tokens[pos]?.line||1)=>{throw Error(`Line ${line}: ${message}`)};
  function lex(){
   if(typeof source!=='string'||source.length>20000)fail('Use at most 20,000 characters.');
   let line=1,i=0;
   while(i<source.length){
    const rest=source.slice(i),c=source[i];
    if(/\s/.test(c)){if(c==='\n')line++;i++;continue}
    if(rest.startsWith('//')){const end=source.indexOf('\n',i);i=end<0?source.length:end;continue}
    if(rest.startsWith('/*')){const end=source.indexOf('*/',i+2);if(end<0)fail('Unclosed comment.',line);line+=(source.slice(i,end+2).match(/\n/g)||[]).length;i=end+2;continue}
    if(c==='#'){const end=source.indexOf('\n',i),directive=source.slice(i,end<0?source.length:end);if(!/^#include\s*<(vector|algorithm|iostream)>\s*$/.test(directive))fail('Only vector, algorithm and iostream includes are supported.',line);i=end<0?source.length:end;continue}
    const string=rest.match(/^("(?:[^"\\\n]|\\[ntr\\"])*"|'(?:[^'\\\n]|\\[ntr\\'])*')/);
    if(string){const raw=string[0];let value=raw.slice(1,-1).replace(/\\([ntr\\"'])/g,(_,x)=>({n:'\n',t:'\t',r:'\r'}[x]||x));tokens.push({v:value,type:'string',line});i+=raw.length;continue}
    const number=rest.match(/^\d+/);if(number){tokens.push({v:Number(number[0]),type:'number',line});i+=number[0].length;continue}
    const name=rest.match(/^[a-zA-Z_]\w*/);if(name){tokens.push({v:name[0],type:'name',line});i+=name[0].length;continue}
    const op=['::','++','--','+=','-=','*=','/=','%=','==','!=','<=','>=','&&','||','<<','>>'].find(x=>rest.startsWith(x));
    if(op){tokens.push({v:op,line});i+=op.length;continue}
    if('{}[]();,.+-*/%<>=!?:'.includes(c)){tokens.push({v:c,line});i++;continue}
    fail(`Unsupported character ${c}. This is a C++ teaching subset.`,line);
   }
   if(tokens.length>5000)fail('Program is too large for the teaching interpreter.');tokens.push({v:'<eof>',line});
  }
  const at=()=>tokens[pos],take=()=>tokens[pos++],is=x=>at()?.v===x;
  function expect(x){if(!is(x))fail(`Expected ${x}; received ${String(at()?.v)}.`);return take()}
  const precedence={'=':1,'+=':1,'-=':1,'*=':1,'/=':1,'%=':1,'||':3,'&&':4,'==':5,'!=':5,'<':6,'>':6,'<=':6,'>=':6,'<<':7,'>>':7,'+':8,'-':8,'*':9,'/':9,'%':9};
  function expression(min=1){
   if(++depth>80)fail('Expression nesting limit reached.');
   let t=take(),node;
   if(t.type==='number'||t.type==='string')node={kind:'literal',value:t.v,line:t.line};
   else if(['!','-','+','++','--'].includes(t.v))node={kind:'unary',op:t.v,value:expression(10),line:t.line};
   else if(t.v==='('){node=expression();expect(')')}
   else if(t.v==='{'){const items=[];if(!is('}')){do{items.push(expression());if(!is(','))break;take()}while(!is('}'))}expect('}');node={kind:'array',items,line:t.line}}
   else if(t.type==='name'){let name=t.v;while(is('::')){take();const part=take();if(part.type!=='name')fail('Expected a qualified name.');name+='::'+part.v}node={kind:'name',name,line:t.line}}
   else fail('Unsupported expression.',t.line);
   while(true){
    if(is('[')){take();const index=expression();expect(']');node={kind:'index',array:node,index,line:node.line};continue}
    if(is('.')){take();const property=take();if(property.type!=='name')fail('Expected a supported vector operation.');node={kind:'member',object:node,property:property.v,line:node.line};continue}
    if(is('(')){take();const args=[];if(!is(')')){do{args.push(expression());if(!is(','))break;take()}while(true)}expect(')');node={kind:'call',callee:node,args,line:node.line};continue}
    if(is('++')||is('--')){node={kind:'postfix',op:take().v,value:node,line:node.line};continue}
    const op=at()?.v,p=precedence[op];if(!p||p<min)break;take();const right=expression(p+(p===1?0:1));node={kind:p===1?'assign':'binary',op,left:node,right,line:node.line};
   }
   depth--;return node;
  }
  const declarationStart=()=>['int','long','bool','vector','auto'].includes(at()?.v);
  function declaration(){const first=take();let type=first.v;if(type==='long'&&is('long'))take();if(type==='vector'){expect('<');expect('int');expect('>')}
   const vars=[];do{const name=take();if(name.type!=='name')fail('Expected a variable name.');let capacity=null;if(is('[')){take();capacity=is(']')?null:expression();expect(']');type='vector'}let value=null;if(is('=')){take();value=expression()}else if(is('{'))value=expression();else if(type==='vector'&&is('(')){take();const size=expression(),fill=is(',')?(take(),expression()):{kind:'literal',value:0};expect(')');value={kind:'filled',size,fill,line:first.line}}vars.push({name:name.v,value,capacity});if(!is(','))break;take()}while(true);return {kind:'declare',type,vars,line:first.line}}
  function statement(){
   if(++depth>80)fail('Statement nesting limit reached.');const line=at().line;let node;
   if(is('{')){take();const body=[];while(!is('}')){if(is('<eof>'))fail('Unclosed block.');body.push(statement())}expect('}');node={kind:'block',body,line}}
   else if(is('for')){take();expect('(');let init=null;if(!is(';'))init=declarationStart()?declaration():{kind:'expr',expr:expression(),line};expect(';');const condition=is(';')?{kind:'literal',value:true,line}:expression();expect(';');const update=is(')')?null:expression();expect(')');node={kind:'for',init,condition,update,body:statement(),line}}
   else if(is('while')){take();expect('(');const condition=expression();expect(')');node={kind:'while',condition,body:statement(),line}}
   else if(is('if')){take();expect('(');const condition=expression();expect(')');const body=statement();let alternate=null;if(is('else')){take();alternate=statement()}node={kind:'if',condition,body,alternate,line}}
   else if(is('return')){take();node={kind:'return',value:is(';')?null:expression(),line};expect(';')}
   else if(is('cout')||is('std')&&tokens[pos+1]?.v==='::'&&tokens[pos+2]?.v==='cout'){if(is('std')){take();take()}take();const values=[];while(is('<<')){take();values.push(expression(8))}if(!values.length)fail('cout needs << and a value.');expect(';');node={kind:'output',values,line}}
   else if(declarationStart()){node=declaration();expect(';')}
   else if(is(';')){take();node={kind:'empty',line}}
   else {node={kind:'expr',expr:expression(),line};expect(';')}
   depth--;return node;
  }
  class Scope{constructor(parent=null){this.parent=parent;this.values=new Map()}find(name){if(this.values.has(name))return this;if(this.parent)return this.parent.find(name);fail(`Unknown variable ${name}.`)}get(name){return this.find(name).values.get(name)}all(){return {...(this.parent?.all()||{}),...Object.fromEntries(this.values)}}}
  function bounded(v){if(typeof v==='number'&&(!Number.isSafeInteger(v)||Math.abs(v)>1e9))fail('Only bounded integers between −1,000,000,000 and 1,000,000,000 are supported.');return v}
  function tick(){if(++steps>10000||events.length>=800)fail('Execution limit reached (800 events / 10,000 operations).')}
  function ref(node,scope){if(node.kind==='name'){const owner=scope.find(node.name);return {get:()=>owner.values.get(node.name),set:v=>{const old=owner.values.get(node.name);if(Array.isArray(old))fail('Whole-array assignments are outside this teaching subset.',node.line);if(typeof old!==typeof v)fail('Variable assignments must preserve their type.',node.line);owner.values.set(node.name,bounded(v))}}}if(node.kind==='index'){const arr=evaluate(node.array,scope),index=evaluate(node.index,scope);if(!Array.isArray(arr)||!Number.isInteger(index)||index<0||index>=arr.length)fail('Array index is outside allocated storage.',node.line);return {get:()=>arr[index],set:v=>{if(typeof v!=='number')fail('Only integer array values are supported.',node.line);arr[index]=bounded(v)},array:arr,index}}fail('Assignment requires a variable or array cell.',node.line)}
  function evaluate(node,scope){
   tick();if(node.kind==='literal')return bounded(node.value);
   if(node.kind==='name'){if(['true','false'].includes(node.name))return node.name==='true';if(['endl','std::endl'].includes(node.name))return '\n';return scope.get(node.name)}
   if(node.kind==='array'){if(node.items.length>64)fail('Use at most 64 array values.',node.line);return node.items.map(n=>{const v=evaluate(n,scope);if(typeof v!=='number')fail('Only integer arrays are supported.',node.line);return bounded(v)})}
   if(node.kind==='filled'){const size=evaluate(node.size,scope),fill=evaluate(node.fill,scope);if(!Number.isInteger(size)||size<0||size>64||typeof fill!=='number')fail('Use an integer array capacity between 0 and 64.',node.line);return Array(size).fill(bounded(fill))}
   if(node.kind==='index')return ref(node,scope).get();
   if(node.kind==='assign'){const r=ref(node.left,scope),right=evaluate(node.right,scope),old=r.get();let value=right;if(node.op!=='=')value=operation(node.op[0],old,right,node.line);r.set(value);return value}
   if(node.kind==='binary'){const a=evaluate(node.left,scope);if(node.op==='&&')return !!a&&!!evaluate(node.right,scope);if(node.op==='||')return !!a||!!evaluate(node.right,scope);return operation(node.op,a,evaluate(node.right,scope),node.line)}
   if(node.kind==='postfix'||node.kind==='unary'&&['++','--'].includes(node.op)){const r=ref(node.value,scope),old=r.get();if(typeof old!=='number')fail('Increment requires an integer.',node.line);r.set(bounded(old+(node.op==='++'?1:-1)));return node.kind==='postfix'?old:r.get()}
   if(node.kind==='unary'){const v=evaluate(node.value,scope);if(node.op==='!')return !v;if(typeof v!=='number')fail('Unary arithmetic needs an integer.',node.line);return bounded(node.op==='-'?-v:v)}
   if(node.kind==='call'){
    const c=node.callee;
    if(c.kind==='member'){const a=evaluate(c.object,scope);if(!Array.isArray(a))fail('Vector operation requires an array.',node.line);if(c.property==='size'&&!node.args.length)return a.length;if(['begin','end'].includes(c.property)&&!node.args.length)return {iterator:true,array:a,index:c.property==='begin'?0:a.length};if(c.property==='push_back'&&node.args.length===1){if(a.length>=64)fail('Array capacity limit reached.');const v=evaluate(node.args[0],scope);if(typeof v!=='number')fail('push_back requires an integer.');a.push(bounded(v));return 0}fail('Supported vector methods: size, begin, end and push_back.',node.line)}
    if(c.kind!=='name')fail('Unsupported call.',node.line);const name=c.name.replace(/^std::/,'');
    if(name==='sort'&&node.args.length===2){const a=evaluate(node.args[0],scope),b=evaluate(node.args[1],scope);if(!a?.iterator||!b?.iterator||a.array!==b.array||a.index>b.index)fail('sort requires begin/end iterators for the same array.',node.line);const sorted=a.array.slice(a.index,b.index).sort((x,y)=>x-y);a.array.splice(a.index,b.index-a.index,...sorted);return 0}
    if(name==='swap'&&node.args.length===2){const a=ref(node.args[0],scope),b=ref(node.args[1],scope),old=a.get();a.set(b.get());b.set(old);return 0}
    if(['min','max'].includes(name)&&node.args.length===2){const a=evaluate(node.args[0],scope),b=evaluate(node.args[1],scope);if(typeof a!=='number'||typeof b!=='number')fail('min/max need integers.');return Math[name](a,b)}
    fail(`Unsupported function ${name}. Use the full compiler for general C++.`,node.line);
   }
   fail('Unsupported expression.',node.line);
  }
  function operation(op,a,b,line){
   if(['==','!='].includes(op))return op==='=='?a===b:a!==b;
   if(typeof a!=='number'||typeof b!=='number')fail('This teaching subset supports integer arithmetic and comparisons.',line);
   if(['/', '%'].includes(op)&&b===0)fail('Division by zero.',line);
   if(['<<','>>'].includes(op))fail('Bit shifting is outside this teaching subset.',line);const operations={'+':()=>a+b,'-':()=>a-b,'*':()=>a*b,'/':()=>Math.trunc(a/b),'%':()=>a%b,'<':()=>a<b,'>':()=>a>b,'<=':()=>a<=b,'>=':()=>a>=b,'<<':()=>a<<b,'>>':()=>a>>b};if(!operations[op])fail('Unsupported operator.',line);return bounded(operations[op]());
  }
  function serialized(v){if(Array.isArray(v)){if(!ids.has(v))ids.set(v,String(nextId++));return {kind:'list',id:ids.get(v),size:v.length,items:v.slice(0,24)}}return v}
  function snapshot(scope,line,phase,label,transfer=null){tick();const record={line,event:phase,phase,label,transfer,frames:[{function:'main',line,variables:Object.fromEntries(Object.entries(scope.all()).map(([k,v])=>[k,serialized(v)]))}],stdoutLength:stdout.length};traceBytes+=JSON.stringify(record).length;if(traceBytes>4000000)fail('Trace size limit reached (4 MB).');events.push(record)}
  function pure(n){return n.kind==='literal'||n.kind==='name'||n.kind==='unary'&&['+','-','!'].includes(n.op)&&pure(n.value)||n.kind==='binary'&&pure(n.left)&&pure(n.right)}
  function transferFor(node,scope){if(node.kind!=='assign'||node.op!=='='||node.left.kind!=='index'||node.right.kind!=='index'||!pure(node.left.index)||!pure(node.right.index)||node.left.array.kind!=='name'||node.right.array.kind!=='name')return null;const a=ref(node.left,scope),b=ref(node.right,scope);return {toName:node.left.array.name,fromName:node.right.array.name,toId:serialized(a.array).id,toIndex:a.index,fromId:serialized(b.array).id,fromIndex:b.index,value:b.get()}}
  function execute(node,scope){
   tick();if(node.kind==='empty')return null;
   if(node.kind==='block'){const block=new Scope(scope);for(const child of node.body){const returned=execute(child,block);if(returned)return returned}return null}
   if(node.kind==='declare'){for(const v of node.vars){if(scope.values.has(v.name))fail('Variable already declared in this scope.',node.line);if(!v.value)fail('Initialize variables explicitly in this teaching subset.',node.line);const value=evaluate(v.value,scope);if(node.type==='vector'&&!Array.isArray(value))fail('Array declaration requires an initializer list.',node.line);if(!['vector','auto'].includes(node.type)&&(node.type==='bool'?typeof value!=='boolean':typeof value!=='number'))fail('Scalar declaration requires an integer or boolean.',node.line);if(v.capacity){const size=evaluate(v.capacity,scope);if(!Number.isInteger(size)||size<value.length||size>64)fail('Invalid array capacity.',node.line);while(value.length<size)value.push(0)}if(Object.keys(scope.all()).length>=32)fail('Variable limit reached (32 visible names).');scope.values.set(v.name,Array.isArray(value)?value.slice():value)}snapshot(scope,node.line,'after','Initialize '+node.vars.map(v=>v.name).join(', ')+'.');return null}
   if(node.kind==='expr'){snapshot(scope,node.line,'before','Read the highlighted statement.');const transfer=transferFor(node.expr,scope);evaluate(node.expr,scope);let label=transfer?`Copy ${transfer.value}: ${transfer.fromName}[${transfer.fromIndex}] → ${transfer.toName}[${transfer.toIndex}].`:'The highlighted statement has completed.';if(node.expr.kind==='call'&&node.expr.callee.name?.replace(/^std::/,'')==='sort')label='sort completed: the array is now ordered. Internal library comparisons are not recorded.';snapshot(scope,node.line,'after',label,transfer);return null}
   if(node.kind==='if'){const result=!!evaluate(node.condition,scope);snapshot(scope,node.line,'condition',`Condition is ${result?'true: take this branch.':'false: use the other branch if present.'}`);return execute(result?node.body:node.alternate||{kind:'empty'},scope)}
   if(node.kind==='for'||node.kind==='while'){const loop=new Scope(scope);if(node.init)execute(node.init,loop);while(true){const condition=!!evaluate(node.condition,loop);snapshot(loop,node.line,'condition',condition?'Loop condition is true: enter the body.':'Loop condition is false: leave the loop.');if(!condition)break;const returned=execute(node.body,loop);if(returned)return returned;if(node.update){evaluate(node.update,loop);snapshot(loop,node.line,'after','Update the loop variable.')}}return null}
   if(node.kind==='output'){for(const n of node.values){const v=evaluate(n,scope);if(!['string','number','boolean'].includes(typeof v))fail('cout supports scalar values only.',node.line);stdout+=typeof v==='boolean'?(v?'1':'0'):String(v);if(stdout.length>10000)fail('Output limit reached.')}snapshot(scope,node.line,'after','Write the value to output.');return null}
   if(node.kind==='return'){const value=node.value?evaluate(node.value,scope):0;snapshot(scope,node.line,'return',`Return ${value} from main.`);return {value}}
   fail('Unsupported statement.',node.line);
  }
  let error=null;
  try{lex();if(is('using')){take();expect('namespace');expect('std');expect(';')}expect('int');expect('main');expect('(');expect(')');const program=statement();if(program.kind!=='block')fail('main needs a block.');expect('<eof>');execute(program,new Scope())}catch(e){error=e.message}
  return {events,stdout,error,truncated:!!error&&error.includes('limit reached')};
 }
 globalThis.CairnCppTrace={run,examples};
})();
