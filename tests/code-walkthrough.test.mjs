import test from 'node:test';
import assert from 'node:assert/strict';
import '../cpp-trace.js';
import '../trace-diagrams.js';
const C=globalThis.CairnCppTrace,D=globalThis.CairnTraceDiagrams;
test('editable merge approaches execute actual C++ subset statements and match a sorting oracle',()=>{
 let seed=53;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed%21-10};
 for(const approach of ['merge-append','merge-pointers'])for(let t=0;t<30;t++){
  const a=Array.from({length:t%6},random).sort((a,b)=>a-b),b=Array.from({length:(t+2)%6},random).sort((a,b)=>a-b);
  const source=C.examples[approach].replace('1, 2, 3, 0, 0, 0',[...a,...b.map(()=>0)].join(', ')).replace('2, 5, 6',b.join(', ')).replace('int m = 3, n = 3;',`int m = ${a.length}, n = ${b.length};`);
  const result=C.run(source);assert.equal(result.error,null,source);assert.deepEqual(result.events.at(-1).frames[0].variables.nums1.items,[...a,...b].sort((x,y)=>x-y));
 }
});
test('copy arrows identify the source and destination from actual evaluated indices',()=>{
 const result=C.run(C.examples['merge-append']),index=result.events.findIndex(e=>e.transfer);
 const diagram=D.model(result.events,index,C.examples['merge-append']);assert.equal(diagram.transfer.fromIndex,0);assert.equal(diagram.transfer.toIndex,3);assert.equal(diagram.transfer.value,2);
 assert.equal(diagram.rows.find(r=>r.name==='nums1').items[3],2);assert.equal(diagram.rows.find(r=>r.name==='nums1').changed[3],true);
 const changed=C.run(C.examples['merge-append'].replace('nums2 = {2, 5, 6}','nums2 = {-4, 5, 9}'));
 assert.deepEqual(changed.events.at(-1).frames[0].variables.nums1.items,[-4,1,2,3,5,9]);
});
test('array bounds, unsupported syntax and endless loops fail explicitly',()=>{
 assert.match(C.run(C.examples['merge-append'].replace('1, 2, 3, 0, 0, 0','1, 2, 3')).error,/outside allocated storage/);
 assert.match(C.run('int helper() { return 1; } int main() { return helper(); }').error,/Expected main/);
 assert.match(C.run('int main() { int i = 0; while (true) { i++; } }').error,/limit reached/);
 assert.match(C.run('int main() { int i = 1 / 0; }').error,/Division by zero/);
 assert.match(C.run('int main() { int i = 99999999999999; }').error,/bounded integers/);
});
test('integer division, short circuiting, scopes and copied vector initialization follow supported semantics',()=>{
 const result=C.run('int main() { vector<int> a={1}; vector<int> b=a; b[0]=9; int n = -5 / 2; if (false && a[9] == 0) n=7; for(int i=0; i<2; i++) { int x=i; } return 0; }');
 assert.equal(result.error,null);const vars=result.events.at(-1).frames[0].variables;assert.equal(vars.a.items[0],1);assert.equal(vars.b.items[0],9);assert.equal(vars.n,-2);assert.ok(!('i' in vars));assert.ok(!('x' in vars));
});
test('read-only index parser rejects executable code and unsupported expressions',()=>{
 assert.equal(D.indexValue('m + i',{m:3,i:2}),5);assert.equal(D.indexValue('m + i++',{m:3,i:2}),null);assert.equal(D.indexValue('fetch("/api")',{}),null);assert.equal(D.indexValue('unknown + 1',{}),null);
});
