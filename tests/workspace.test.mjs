import {test} from 'node:test';
import assert from 'node:assert/strict';
import '../workspace.js';
test('Progress counts only assigned activities and fully complete sessions',()=>{
 const course={weeks:[{number:1,title:'Docs',videoIds:[],days:[{day:'Monday'},{day:'Tuesday'}]},{number:2,title:'Video',videoIds:['V1'],days:[{day:'Monday'}]}]};
 const state={progress:{'1-monday':{read:true,build:true,test:true,explain:true,watch:true},'1-tuesday':{read:true},'2-monday':{read:true,build:true,test:true,explain:true}},skippedDays:{'1-tuesday':true},assessments:{1:{status:'self_assessed'},2:{status:'needs_revision'}}};
 const s=Workspace.summary(course,state);assert.equal(s.skipped,1);assert.equal(s.weeks[0].pending,0);assert.equal(s.weeks[1].pending,1);assert.equal(s.total,13);assert.equal(s.done,9);assert.equal(s.sessions,1);assert.equal(s.passed,1);assert.equal(s.pct,69);assert.equal(s.weeks[1].sessions,0);
});
test('System Design full progress excludes unpublished completion and exposes release count',()=>{
 const s=Workspace.summary({trackId:'system-design-v1',topics:[{id:'SD-001',status:'published'},{id:'SD-002',status:'published'},{id:'SD-003',status:'coming-soon'}]},{sd:{topics:{'SD-001':{status:'completed'},'SD-003':{status:'completed'}}}});assert.equal(s.done,1);assert.equal(s.total,3);assert.equal(s.available,2);assert.equal(s.pct,33);
});
