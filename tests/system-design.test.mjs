import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {validateSystemDesignContent} from '../lib/system-design-content.mjs';
import {validateState,emptyState} from '../lib/state.mjs';
import '../system-design-models.js';
const course=JSON.parse(await readFile('content/system-design.json'));
const canonical=JSON.parse(await readFile('artifacts/system-design-canonical.json'));
test('System Design preserves every canonical ID, title, module, phase and pathway',()=>{
 assert.doesNotThrow(()=>validateSystemDesignContent(course));assert.deepEqual(course.phases,canonical.phases);assert.deepEqual(course.modules,canonical.modules);
 assert.deepEqual(course.topics.map(t=>Object.fromEntries(Object.keys(canonical.topics[0]).map(k=>[k,t[k]]))),canonical.topics);
 assert.deepEqual(course.topics.filter(t=>t.status==='published').map(t=>t.id),['SD-001','SD-002','SD-003']);
 const malformed=structuredClone(course);malformed.topics[7].id='SD-007';assert.throws(()=>validateSystemDesignContent(malformed));
});
test('Existing content, algorithms and database schema remain byte identical',async()=>{const baseline=JSON.parse(await readFile('artifacts/system-design-baseline.json'));for(const [file,hash] of Object.entries(baseline))assert.equal(createHash('sha256').update(await readFile(file)).digest('hex'),hash,file)});
test('System Design state validates explicit completion, notes, drafts, resume and scenarios',async()=>{
 const now=new Date().toISOString(),state={...emptyState(),sd:{topics:{'SD-001':{status:'completed',completedAt:now,lastOpenedAt:now,updatedAt:now}},lastTopicId:'SD-001',notes:{'SD-001':'My architecture notes'},practice:{'SD-105':'Parking lot invariant'},bookmarks:['SD-001'],visual:{scene:'load',traffic:6,nodes:3,capacity:4,mode:'round robin',cursor:2,origin:'SD-025'}}};
 assert.doesNotThrow(()=>validateState(state,course));const mutate=fn=>{const value=structuredClone(state);fn(value);assert.throws(()=>validateState(value,course))};
 mutate(v=>{v.sd.topics['SD-004']=v.sd.topics['SD-001']});mutate(v=>v.sd.lastTopicId='SD-999');mutate(v=>v.sd.notes['SD-999']='x');mutate(v=>v.sd.bookmarks.push('SD-001'));mutate(v=>v.sd.visual.cursor=99);mutate(v=>v.sd.visual.traffic=41);mutate(v=>v.sd.visual.origin='SD-999');mutate(v=>v.progress['1-monday']={read:true});
 for(const file of ['content/curriculum.json','content/dsa-curriculum.json']){const original=JSON.parse(await readFile(file));assert.throws(()=>validateState(state,original));}
});
test('Eight simulations are deterministic and conserve load, queue messages and token bounds',()=>{
 const {scenes,simulate}=globalThis.SystemDesignModels;assert.equal(scenes.length,8);
 for(const s of scenes)for(const mode of s.modes){const options={traffic:8,nodes:3,capacity:4,mode};const frames=simulate(s.id,options);assert.deepEqual(frames,simulate(s.id,options));assert.ok(frames.length>=4);for(const f of frames){assert.ok(f.explanation);assert.ok(Object.values(f.metrics).every(Number.isFinite));assert.ok(f.bars.every(b=>Number.isFinite(b.value)&&b.value>=0));if(s.id==='queue')assert.equal(f.metrics.Produced,f.metrics.Completed+f.metrics.Backlog+f.metrics['Dead letters']);if(s.id==='rate')assert.ok(f.metrics['Tokens remaining']>=0&&f.metrics['Tokens remaining']<=4)}}
 assert.equal(simulate('load',{traffic:10,nodes:2,capacity:3}).at(-1).metrics['Queued requests'],48);
 assert.equal(simulate('rate',{traffic:6,nodes:3,capacity:4}).at(-1).metrics.Accepted,37);
 assert.equal(simulate('replication',{capacity:3,mode:'pause replica'}).at(-1).metrics['Replica version'],0);
 assert.equal(simulate('http',{capacity:4}).at(-1).metrics['Elapsed (ms)'],20);
 for(const s of scenes){assert.throws(()=>simulate(s.id,{traffic:0}));assert.throws(()=>simulate(s.id,{mode:'invalid'}))}
});
