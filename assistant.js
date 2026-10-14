/* Keys and conversation live only in this tab's memory. No storage or analytics. */
(()=>{
 let context,owner,connection=null,history=[],busy=false,version=0,root,bubble,dialog,settingsOpen=true,includeNotes=false;
 const names={openai:'OpenAI',anthropic:'Anthropic',google:'Google Gemini',openrouter:'OpenRouter'};
 const docs={openai:'https://platform.openai.com/docs/models',anthropic:'https://docs.anthropic.com/en/docs/about-claude/models',google:'https://ai.google.dev/gemini-api/docs/models',openrouter:'https://openrouter.ai/models'};
 function clear(){includeNotes=false;connection=null;history=[];busy=false;version++;settingsOpen=true;}
 function mount(){
  root=document.createElement('div');root.id='cairn-assistant';
  root.innerHTML='<button class="assistant-bubble" aria-label="Open Cairn learning assistant" aria-haspopup="dialog"><span aria-hidden="true">✦</span><b>Ask Cairn</b></button><dialog class="assistant-dialog" aria-labelledby="assistant-title"><header class="assistant-head"><div><span class="assistant-emblem" aria-hidden="true">✦</span><div><h2 id="assistant-title">Cairn</h2><small>Your learning companion</small></div></div><button type="button" class="assistant-close" aria-label="Close assistant">✕</button></header><div class="assistant-body"></div></dialog>';
  document.body.append(root);bubble=root.querySelector('.assistant-bubble');dialog=root.querySelector('dialog');
  bubble.onclick=()=>{draw();dialog.showModal();dialog.querySelector('input,textarea,button')?.focus()};
  dialog.querySelector('.assistant-close').onclick=()=>dialog.close();dialog.addEventListener('close',()=>bubble.focus());
 }
 function node(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el}
 function draw(){
  if(!dialog)return;const body=dialog.querySelector('.assistant-body');body.replaceChildren();
  if(settingsOpen||!connection){
   const setup=node('form',undefined,'assistant-setup');setup.innerHTML='<span class="eyebrow">YOUR PROVIDER · YOUR CHOICE</span><h3>Connect your AI</h3><p>Use your own API key. CourseCairn does not pay for AI requests; your provider’s pricing and limits apply.</p><label for="assistant-provider">Provider</label><select id="assistant-provider"><option value="openai">OpenAI</option><option value="anthropic">Anthropic</option><option value="google">Google Gemini</option><option value="openrouter">OpenRouter</option></select><label for="assistant-model">Model ID</label><input id="assistant-model" required maxlength="150" autocomplete="off" placeholder="Exact model ID from your provider"><a class="assistant-model-doc" target="_blank" rel="noopener noreferrer">Find your model ID ↗</a><label for="assistant-key">API key</label><input id="assistant-key" type="password" required minlength="10" maxlength="512" autocomplete="off" spellcheck="false" placeholder="Paste your provider key"><p class="assistant-privacy">Your key stays in this tab’s memory and is sent through CourseCairn’s server only to your selected provider. It is never saved in our database or browser storage. Refreshing clears it.</p><label class="assistant-consent"><input type="checkbox" required> I agree to send my questions, relevant course material and saved progress to this provider.</label><button class="button button-primary" type="submit">Use this connection →</button>';
   const provider=setup.querySelector('select'),model=setup.querySelector('#assistant-model'),key=setup.querySelector('#assistant-key');
   const updateDoc=()=>{setup.querySelector('a').href=docs[provider.value]};provider.onchange=()=>{model.value='';key.value='';updateDoc()};updateDoc();
   if(connection){provider.value=connection.provider;model.value=connection.model;updateDoc();const cancel=node('button','Back to chat','button button-secondary');cancel.type='button';cancel.onclick=()=>{settingsOpen=false;draw()};setup.append(cancel)}
   setup.onsubmit=e=>{e.preventDefault();if(!setup.reportValidity())return;const modelId=model.value.trim(),apiKey=key.value.trim();if(!/^[a-zA-Z0-9][a-zA-Z0-9._:/-]{0,149}$/.test(modelId)||/\s/.test(apiKey)){model.setCustomValidity('Check the model ID and key; neither should contain spaces.');model.reportValidity();model.oninput=()=>model.setCustomValidity('');key.oninput=()=>model.setCustomValidity('');return}connection={provider:provider.value,model:modelId,apiKey};key.value='';history=[];version++;busy=false;settingsOpen=false;draw();dialog.querySelector('textarea')?.focus()};body.append(setup);return;
  }
  const toolbar=node('div',undefined,'assistant-toolbar');toolbar.append(node('span',`${names[connection.provider]} · ${connection.model}`));
  for(const [label,action] of [['Settings',()=>{settingsOpen=true;draw()}],['New chat',()=>{history=[];draw()}],['Disconnect',()=>{clear();draw()}]]){const btn=node('button',label);btn.type='button';btn.disabled=busy;btn.onclick=action;toolbar.append(btn)}body.append(toolbar);
  body.append(node('p',`Course: ${context.catalog.courses.find(c=>c.id===context.activeCourseId)?.title}. Uses saved account data; save your latest work first.`,'assistant-context'));
  const log=node('div',undefined,'assistant-messages');log.setAttribute('role','log');log.setAttribute('aria-label','Conversation');log.setAttribute('aria-live','polite');
  if(!history.length){log.append(node('h3','A little clarity for your next step.'),node('p','Ask about a lesson, compare courses, plan your practice, or review your progress. Your connection is checked when you send the first question.'));}
  for(const m of history){const item=node('article',undefined,'assistant-message '+m.role);item.append(node('b',m.role==='user'?'You':'Cairn'),node('p',m.content));if(m.sources?.length){const sources=node('details');sources.append(node('summary','Course context used'));for(const s of m.sources){if(!/^#\/[a-zA-Z0-9/_-]+$/.test(s.href))continue;const a=node('a',s.title);a.href=s.href;a.onclick=()=>dialog.close();sources.append(a)}item.append(sources)}log.append(item)}
  if(busy)log.append(node('p','Reading your course context…','assistant-thinking'));body.append(log);
  const form=node('form',undefined,'assistant-compose');form.innerHTML='<div class="assistant-prompts"><button type="button">What should I study next?</button><button type="button">Explain this lesson</button><button type="button">Summarize my progress</button></div><label class="assistant-notes"><input id="assistant-notes" type="checkbox"> Include relevant saved notes, practice drafts and links</label><label class="sr-only" for="assistant-question">Your question</label><textarea id="assistant-question" required maxlength="2000" rows="3" placeholder="Ask about your learning…"></textarea><div class="assistant-send-row"><small>AI can make mistakes. Check linked course sources.<br>Chat clears on refresh or course change.</small><button class="button button-primary" type="submit">Send ↑</button></div><p class="assistant-error" role="alert"></p>';
  form.querySelector('#assistant-notes').checked=includeNotes;form.querySelector('#assistant-notes').onchange=e=>{includeNotes=e.target.checked;history=[];draw()};
  form.querySelectorAll('button').forEach(b=>b.disabled=busy);form.querySelectorAll('input,textarea').forEach(i=>i.disabled=busy);form.querySelectorAll('.assistant-prompts button').forEach(b=>b.onclick=()=>{form.querySelector('textarea').value=b.textContent;form.querySelector('textarea').focus()});
  form.onsubmit=async e=>{
   e.preventDefault();if(busy||!form.reportValidity())return;const question=form.querySelector('textarea').value.trim();if(!question)return;
   const request={...connection,question,courseId:context.activeCourseId,path:location.hash.split('?')[0],includeNotes:form.querySelector('#assistant-notes').checked,history:history.slice(-8).map(({role,content})=>({role,content:content.slice(0,5000)}))};
   const requestVersion=++version;history.push({role:'user',content:question});busy=true;draw();
   try{const result=await Account.askAssistant(request);if(requestVersion!==version)return;history.push({role:'assistant',content:result.text,sources:result.sources});history=history.slice(-20);busy=false;draw();dialog.querySelector('textarea')?.focus()}
   catch(error){if(requestVersion!==version)return;history.pop();busy=false;draw();dialog.querySelector('textarea').value=question;dialog.querySelector('.assistant-error').textContent=error.message;}
   finally{request.apiKey=''}
  };body.append(form);log.scrollTop=log.scrollHeight;
 }
 function update(ctx){const id=Account.user?.id;if(owner!==id){clear();owner=id}const changed=context&&context.activeCourseId!==ctx.activeCourseId;context=ctx;if(!root)mount();if(changed){history=[];busy=false;version++}if(dialog.open)draw();}
 globalThis.CairnAssistant={update};
})();
