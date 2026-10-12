export function validateSystemDesignContent(course){
 const assert=(ok,message)=>{if(!ok)throw new Error('System Design content: '+message)};
 assert(course.course.id==='system-design'&&course.trackId==='system-design-v1','immutable course identity');
 assert(course.phases.length===6&&course.modules.length===20&&course.topics.length===196,'expected counts');
 assert(new Set(course.topics.map(t=>t.id)).size===196,'unique topic IDs');
 assert(JSON.stringify(course.modules.flatMap(m=>m.topicIds))===JSON.stringify(course.topics.map(t=>t.id)),'canonical module sequence');
 assert(JSON.stringify(course.phases.flatMap(p=>p.moduleIds))===JSON.stringify(course.modules.map(m=>m.id)),'canonical phase sequence');
 const resourceIds=new Set(course.resources.map(r=>r.id));
 course.phases.forEach((p,i)=>assert(p.id===`SD-P${String(i+1).padStart(2,'0')}`&&p.number===i+1,'phase identity'));
 course.modules.forEach((m,i)=>assert(m.id===`SD-M${String(i+1).padStart(2,'0')}`&&m.order===i+1&&course.phases.find(p=>p.id===m.phaseId)?.moduleIds.includes(m.id),'module membership'));
 course.topics.forEach((t,i)=>{const module=course.modules.find(m=>m.id===t.moduleId);assert(t.id===`SD-${String(i+1).padStart(3,'0')}`&&t.topicNumber===i+1,'gap-free topic sequence');assert(module?.topicIds.includes(t.id)&&module.phaseId===t.phaseId,'topic membership');assert(t.courseId==='system-design'&&t.title&&['published','coming-soon'].includes(t.status),'topic metadata');assert(t.tags.every(tag=>['foundation','hld','lld','project','interview'].includes(tag)),'pathway tags');assert(t.prerequisiteTopicIds.every(id=>course.topics.some(x=>x.id===id)),'prerequisites');if(t.status==='published'){const l=t.lesson;assert(l&&l.sections.length>=4&&l.sections.every(s=>s.title&&s.text.length>80),'authored explanations');assert(t.objectives.length>=2&&t.estimatedMinutes>0&&t.resourceIds.length>0&&t.resourceIds.every(id=>resourceIds.has(id)),'publication metadata');assert(l.diagram.length>=2&&l.diagramCaption&&l.example&&l.exercise&&l.takeaways.length&&l.quiz?.options.length>=2&&Number.isInteger(l.quiz.answer)&&l.quiz.answer>=0&&l.quiz.answer<l.quiz.options.length&&l.quiz.explanation,'publication content')}});
 for(const r of course.resources){assert(new URL(r.url).protocol==='https:'&&r.provider&&/^\d{4}-\d{2}-\d{2}$/.test(r.verifiedAt),'verified resource');assert(r.topicIds.every(id=>course.topics.some(t=>t.id===id)),'resource topic mapping')}
 return course;
}
