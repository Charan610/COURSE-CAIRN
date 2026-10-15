/* Real Python execution snapshots. No account state is sent to the runtime. */
(()=>{
 const examples={
 binary:`a = [1, 2, 2, 5, 8]\ntarget = 2\nlo, hi = 0, len(a)\nwhile lo < hi:\n    mid = lo + (hi - lo) // 2\n    if a[mid] < target:\n        lo = mid + 1\n    else:\n        hi = mid\nresult = lo if lo < len(a) and a[lo] == target else -1\nprint(result)`,
 sorting:`a = [7, 3, 5, 1]\nfor i in range(1, len(a)):\n    j = i\n    while j > 0 and a[j - 1] > a[j]:\n        a[j - 1], a[j] = a[j], a[j - 1]\n        j -= 1\nprint(a)`,
 bfs:`from collections import deque\ngraph = {0: [1, 2], 1: [3], 2: [3], 3: []}\nqueue = [0]\nseen = {0}\norder = []\nwhile queue:\n    node = queue.pop(0)\n    order.append(node)\n    for neighbor in graph[node]:\n        if neighbor not in seen:\n            seen.add(neighbor)\n            queue.append(neighbor)\nprint(order)`,
 recursion:`def fib(n):\n    if n <= 1:\n        return n\n    left = fib(n - 1)\n    right = fib(n - 2)\n    return left + right\nanswer = fib(4)\nprint(answer)`,
 linked:`class Node:\n    def __init__(self, value, next=None):\n        self.value = value\n        self.next = next\nhead = Node(1, Node(2, Node(3)))\nprevious = None\ncurrent = head\nwhile current is not None:\n    following = current.next\n    current.next = previous\n    previous = current\n    current = following\nhead = previous\nprint(head.value)`,
 blank:`# Write your Python algorithm here.\n# Every recorded step comes from this code.\nvalues = [3, 1, 4, 2]\nprint(values)`
 };
 function mount({workbench,module,esc,onModeChange}){
  const panel=workbench.querySelector('.dsa-compiler'),stage=workbench.querySelector('.visual-stage');
  const external=document.createElement('div');external.className='compiler-external-view';external.append(...panel.childNodes);panel.append(external);
  const tutorial=document.createElement('div');tutorial.append(...stage.childNodes);stage.append(tutorial);
  const modes=document.createElement('div');modes.className='trace-mode-switch';modes.innerHTML='<button type="button" class="button button-secondary" aria-pressed="true" data-mode="compiler">Compiler</button><button type="button" class="button button-primary" aria-pressed="false" data-mode="trace">Python · Run & visualize</button>';
  panel.prepend(modes);
  const editor=document.createElement('section');editor.hidden=true;editor.className='python-trace-editor';editor.innerHTML=`<div class="eyebrow">FREE · RUNS ON YOUR DEVICE</div><h2>Your code → your execution</h2><p>Python tracing runs locally. C++ and Java remain available in Compiler mode without execution tracing.</p><label for="trace-example">Starting point</label><select id="trace-example">${Object.keys(examples).map(k=>`<option value="${k}">${({binary:'Binary search',sorting:'Insertion sort',bfs:'Breadth-first search',recursion:'Fibonacci recursion',linked:'Reverse linked list',blank:'Blank starter · write your algorithm'})[k]}</option>`).join('')}</select><label for="trace-editor">Python source code</label><textarea id="trace-editor" maxlength="20000" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><label for="trace-stdin">Standard input (for input())</label><textarea id="trace-stdin" maxlength="10000" rows="2" placeholder="One input value per line"></textarea><div class="button-row"><button type="button" class="button button-primary" id="trace-run">Run & visualize</button><button type="button" class="button button-secondary" id="trace-stop" disabled>Stop</button><button type="button" class="button button-secondary" id="trace-download">Download code</button></div><p id="trace-run-status" role="status">Ready. The first run downloads the Python runtime from jsDelivr.</p><details><summary>Supported code & limits</summary><p>Standard-library, single-threaded Python. 800 recorded events, 10 seconds of execution, 10,000 output characters. Variables are bounded to keep the page responsive. Library internals and native operations are not traced. This is a state debugger, not automatic recognition of a graph or algorithm. Drafts are not saved to your account.</p></details>`;
  panel.append(editor);
  const viewer=document.createElement('section');viewer.hidden=true;viewer.className='python-trace-viewer';viewer.innerHTML='<div class="eyebrow">ACTUAL PYTHON EXECUTION</div><h2>Follow your program</h2><p id="trace-caption">Run your code to see its variables and call stack here.</p><div class="trace-playback"><button type="button" id="trace-prev" aria-label="Previous code step" disabled>←</button><button type="button" id="trace-play" disabled>Play</button><button type="button" id="trace-next" aria-label="Next code step" disabled>→</button><label>Speed<select id="trace-speed"><option value="700">1×</option><option value="350">2×</option><option value="1400">0.5×</option></select></label></div><input id="trace-seek" type="range" min="0" max="0" value="0" aria-label="Code execution step" disabled><div id="trace-stack"></div><div id="trace-values"></div><h3>Executed source</h3><pre id="trace-source">No execution yet.</pre><h3>Output at this step</h3><pre id="trace-output">No output yet.</pre>';
  stage.append(viewer);
  const q=id=>workbench.querySelector('#trace-'+id),source=q('editor');
  q('example').value=examples[module.id]?module.id:'blank';source.value=examples[q('example').value];
  let events=[],stdout='',runSource='',cursor=0,playTimer=null,frame=null,listener=null,outerTimer=null,closed=false,busy=false,generation=0;
  function pause(){clearInterval(playTimer);playTimer=null;q('play').textContent='Play'}
  function cleanupRuntime(){generation++;if(listener)window.removeEventListener('message',listener);listener=null;clearTimeout(outerTimer);frame?.remove();frame=null;busy=false;q('run').disabled=false;q('stop').disabled=true}
  function clearTrace(){pause();events=[];q('values').replaceChildren();q('stack').replaceChildren();q('source').textContent='Run the current code to record its execution.';q('output').textContent='No output yet.';q('caption').textContent='Code changed. Run again to generate matching visual states.';for(const id of ['prev','play','next','seek'])q(id).disabled=true}
  let renderBudget=0;
  function valueHTML(v,depth=0){
   if(++renderBudget>220||depth>5)return '<span class="trace-muted">Display limit</span>';
   if(v===null||typeof v!=='object')return `<span class="trace-scalar">${esc(v===null?'None':typeof v==='boolean'?(v?'True':'False'):typeof v==='string'?JSON.stringify(v).slice(0,280):String(v))}</span>`;
   if(v.kind==='ref')return `<span class="trace-reference">↗ object ${esc(String(v.id).slice(-6))}</span>`;
   if(['list','tuple','set','frozenset','deque'].includes(v.kind)&&Array.isArray(v.items))return `<div class="trace-collection"><small>${esc(v.kind)} · ${Number(v.size)||0} items · #${esc(String(v.id).slice(-6))}</small><div class="trace-cells">${v.items.slice(0,24).map((x,i)=>`<div class="trace-cell">${valueHTML(x,depth+1)}<small>${i}</small></div>`).join('')}</div>${v.size>24?'<small>First 24 items shown</small>':''}</div>`;
   if(v.kind==='dict'&&Array.isArray(v.items))return `<div class="trace-map"><small>dict · #${esc(String(v.id).slice(-6))}</small>${v.items.slice(0,24).filter(Array.isArray).map(pair=>`<div>${valueHTML(pair[0],depth+1)} <span>→</span> ${valueHTML(pair[1],depth+1)}</div>`).join('')}</div>`;
   if(v.kind==='object'&&v.fields&&typeof v.fields==='object')return `<div class="trace-object"><b>${esc(String(v.name).slice(0,80))} #${esc(String(v.id).slice(-6))}</b>${Object.entries(v.fields).slice(0,16).map(([k,x])=>`<div><small>${esc(k)}</small> ${valueHTML(x,depth+1)}</div>`).join('')}</div>`;
   return `<span class="trace-muted">${esc(String(v.text||'Value unavailable').slice(0,250))}</span>`;
  }
  function draw(){
   if(!events.length)return;
   const e=events[cursor];q('caption').textContent=`Step ${cursor+1} / ${events.length} · ${e.event==='line'?'Before executing':e.event} line ${e.line}${e.exception?' · '+e.exception:''}`;
   q('seek').value=cursor;q('prev').disabled=cursor===0;q('next').disabled=cursor===events.length-1;q('play').disabled=false;
   q('stack').innerHTML='<h3>Call stack · current frame first</h3>'+e.frames.map(f=>`<span class="trace-frame-label">${esc(f.function)} · line ${f.line}</span>`).join('');
   renderBudget=0;
   q('values').innerHTML=e.frames.map(f=>`<section class="trace-frame-values"><h3>${esc(f.function)}</h3>${Object.entries(f.variables||{}).slice(0,16).map(([name,v])=>`<div class="trace-variable"><strong>${esc(name)}</strong>${valueHTML(v)}</div>`).join('')||'<p>No captured variables in this frame.</p>'}</section>`).join('')+(e.event==='return'?`<div class="trace-variable"><strong>Return value</strong>${valueHTML(e.returned)}</div>`:'');
   q('source').innerHTML=runSource.split('\n').map((line,i)=>`<span class="${i+1===e.line?'trace-current-line':''}"><small>${i+1}</small>${esc(line)||' '}</span>`).join('');
   const active=q('source').querySelector('.trace-current-line');if(active){const r=active.getBoundingClientRect(),box=q('source').getBoundingClientRect();if(r.top<box.top||r.bottom>box.bottom)q('source').scrollTop+=r.top-box.top-50}
   q('output').textContent=stdout.slice(0,e.stdoutLength)||'(No output yet)';
  }
  modes.querySelectorAll('button').forEach(button=>button.onclick=()=>{const tracing=button.dataset.mode==='trace';onModeChange();pause();if(!tracing&&busy){cleanupRuntime();q('run-status').textContent='Execution stopped when switching modes.'}external.hidden=tracing;editor.hidden=!tracing;tutorial.hidden=tracing;viewer.hidden=!tracing;workbench.classList.toggle('python-tracing',tracing);const reference=workbench.parentElement.querySelector('.visual-detail');if(reference)reference.hidden=tracing;modes.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))});
  const edited=()=>{if(busy)cleanupRuntime();clearTrace();q('run-status').textContent='Ready to trace your current code.'};source.oninput=edited;q('stdin').oninput=edited;
  q('example').onchange=()=>{if(!confirm('Replace the editor with this example? Download your current code first if you want to keep it.'))return;source.value=examples[q('example').value];edited()};
  q('stop').onclick=()=>{cleanupRuntime();q('run-status').textContent='Execution stopped. Your code is still in the editor.'};
  q('run').onclick=async()=>{
   cleanupRuntime();clearTrace();if(source.value.split('\n').length>1500){q('run-status').textContent='Use at most 1,500 lines for visual tracing.';return}busy=true;q('run').disabled=true;q('stop').disabled=false;runSource=source.value;
   q('run-status').textContent='Loading isolated Python runtime… First load may take a little longer.';
   const token=generation,currentSource=runSource,currentStdin=q('stdin').value;
   try{
    const files=await Promise.all(['trace-worker.js','trace-runner.py'].map(async path=>{const r=await fetch(path);if(!r.ok)throw Error('The Python runner could not load. Reload and try again.');return r.text()}));
    if(closed||!busy||generation!==token||source.value!==currentSource)return;
    frame=document.createElement('iframe');frame.hidden=true;frame.title='Isolated Python execution';frame.sandbox='allow-scripts';frame.src='trace-frame.html';frame.referrerPolicy='no-referrer';
    listener=event=>{
     if(event.source!==frame?.contentWindow||event.origin!=='null'||event.data?.channel!=='cairn-python')return;
     const message=event.data;
     if(message.type==='running'){q('run-status').textContent='Recording your code’s actual execution…';return}
     if(message.type==='error'){cleanupRuntime();q('run-status').textContent=String(message.message).slice(0,1500);return}
     if(message.type!=='result')return;
     const result=message.result;
     cleanupRuntime();
     if(!result||!Array.isArray(result.events)||result.events.length>800){q('run-status').textContent='Invalid execution trace. Try again.';return}
     events=result.events.filter(e=>e&&Number.isInteger(e.line)&&e.line>0&&typeof e.event==='string'&&Array.isArray(e.frames)&&e.frames.length<=8&&e.frames.every(f=>f&&Number.isInteger(f.line)&&typeof f.function==='string'&&f.variables&&typeof f.variables==='object'));
     stdout=String(result.stdout||'').slice(0,10000);cursor=0;q('seek').max=Math.max(0,events.length-1);q('seek').disabled=!events.length;
     q('run-status').textContent=result.error?String(result.error).slice(0,1500)+(events.length?' Recorded steps are available.':''):`Finished · ${events.length} real execution events. Use Play or the step buttons.`;
     if(events.length)draw();else q('caption').textContent='No steps recorded. Check the execution message.';
    };
    window.addEventListener('message',listener);
    const runtimeFrame=frame;frame.onload=()=>runtimeFrame.contentWindow?.postMessage({channel:'cairn-python-start',workerSource:files[0],runner:files[1],code:currentSource,stdin:currentStdin},'*');
    outerTimer=setTimeout(()=>{cleanupRuntime();q('run-status').textContent='Runtime timed out. Check your connection and retry.'},75000);
    workbench.append(frame);
   }catch(error){if(closed||generation!==token)return;cleanupRuntime();q('run-status').textContent=error.message}
  };
  q('prev').onclick=()=>{pause();cursor=Math.max(0,cursor-1);draw()};q('next').onclick=()=>{pause();cursor=Math.min(events.length-1,cursor+1);draw()};q('seek').oninput=()=>{pause();cursor=Number(q('seek').value);draw()};
  const play=()=>{if(playTimer){pause();return}if(cursor===events.length-1)cursor=0;draw();q('play').textContent='Pause';playTimer=setInterval(()=>{cursor++;draw();if(cursor>=events.length-1)pause()},Number(q('speed').value))};q('play').onclick=play;q('speed').onchange=()=>{if(playTimer){pause();play()}};
  q('download').onclick=()=>{const url=URL.createObjectURL(new Blob([source.value],{type:'text/x-python'}));const a=document.createElement('a');a.href=url;a.download='coursecairn-'+module.id+'.py';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
  return ()=>{closed=true;pause();cleanupRuntime()};
 }
 globalThis.CairnPythonTrace={mount};
})();
