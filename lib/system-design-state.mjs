import '../system-design-models.js';
const fail=()=>{throw Object.assign(new Error('Invalid System Design data.'),{status:400})};
const record=x=>x&&typeof x==='object'&&!Array.isArray(x);
const date=x=>typeof x==='string'&&x.length<=40&&Number.isFinite(Date.parse(x));
const keys=(x,allowed)=>{if(!record(x)||Object.keys(x).some(k=>!allowed.includes(k)))fail()};
export function validateSystemDesign(value,course){
 keys(value,['progress','notes','dayLinks','bookmarks','assessments','issues','sd']);
 for(const k of ['progress','notes','dayLinks','assessments'])if(value[k]!==undefined&&(!record(value[k])||Object.keys(value[k]).length))fail();
 for(const k of ['bookmarks','issues'])if(value[k]!==undefined&&(!Array.isArray(value[k])||value[k].length))fail();
 const sd=value.sd||{topics:{},notes:{},bookmarks:[],practice:{}};
 keys(sd,['topics','notes','bookmarks','practice','lastTopicId','visual']);
 const known=new Map(course.topics.map(t=>[t.id,t]));
 for(const k of ['topics','notes','practice'])if(!record(sd[k]))fail();
 for(const [id,p] of Object.entries(sd.topics)){keys(p,['status','lastOpenedAt','completedAt','updatedAt']);if(!known.has(id)||!['in-progress','completed'].includes(p.status)||!date(p.lastOpenedAt)||!date(p.updatedAt))fail();if(p.status==='completed'&&(known.get(id).status!=='published'||!date(p.completedAt)))fail();if(p.completedAt!==undefined&&!date(p.completedAt))fail()}
 for(const field of ['notes','practice'])for(const [id,n] of Object.entries(sd[field]))if(!known.has(id)||typeof n!=='string'||n.length>20000)fail();
 if(!Array.isArray(sd.bookmarks)||sd.bookmarks.length>196||new Set(sd.bookmarks).size!==sd.bookmarks.length||sd.bookmarks.some(id=>!known.has(id)))fail();
 if(sd.lastTopicId!==undefined&&(!known.has(sd.lastTopicId)||!sd.topics[sd.lastTopicId]))fail();
 if(sd.visual!==undefined){keys(sd.visual,['scene','traffic','nodes','capacity','mode','cursor','origin']);let frames;try{frames=globalThis.SystemDesignModels.simulate(sd.visual.scene,sd.visual)}catch{fail()}if(!Number.isInteger(sd.visual.cursor)||sd.visual.cursor<0||sd.visual.cursor>=frames.length||!known.has(sd.visual.origin))fail()}
 const result={progress:{},notes:{},dayLinks:{},bookmarks:[],assessments:{},issues:[],sd};if(Buffer.byteLength(JSON.stringify(result))>750000)fail();return result;
}
