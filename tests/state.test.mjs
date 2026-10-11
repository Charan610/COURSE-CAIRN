import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {emptyState,validateState} from '../lib/state.mjs';
const course=JSON.parse(await readFile(new URL('../content/curriculum.json',import.meta.url)));
test('valid course activity and reflection accepted',()=>{const state=emptyState();state.notes['1-monday']='Built the exercise';state.progress['1-monday']={build:true};assert.equal(validateState(state,course).progress['1-monday'].build,true)});
test('unknown lesson keys, unsafe links, false grading and invalid dates rejected',()=>{for(const bad of [{progress:{'999-monday':{read:true}}},{dayLinks:{'1-monday':'javascript:alert(1)'}},{courseStartDate:'2026-10-13'},{courseStartDate:'2026-02-30'},{assessments:{1:{status:'self_assessed',scores:[0,0,0,0,0],critical:false,evidence:'x'}}},{unexpected:'field'}])assert.throws(()=>validateState({...emptyState(),...bad},course))});
test('chapter bookmarks must match the audited source URL',()=>{const video=course.videos.find(v=>v.chapters.length),chapter=video.chapters[0];const bookmark={key:'chapter',type:'chapter',id:video.id,title:chapter.title,startSeconds:chapter.startSeconds,url:chapter.url};assert.doesNotThrow(()=>validateState({...emptyState(),bookmarks:[bookmark]},course));assert.throws(()=>validateState({...emptyState(),bookmarks:[{...bookmark,url:'https://evil.example'}]},course))});
