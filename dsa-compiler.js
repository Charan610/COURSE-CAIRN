/* External execution stays in the provider's isolated origin. */
(()=>{
 const languages={cpp:'C++',java:'Java',python:'Python 3'};
 function mount(workbench){
  workbench.classList.add('with-compiler');
  const panel=document.createElement('section');
  panel.className='card panel dsa-compiler';
  panel.innerHTML=`<div class="eyebrow">WRITE · RUN · COMPARE</div><h2>Compiler playground</h2><p>Implement the algorithm while stepping through its visual explanation beside you.</p><label for="compiler-language">Code language</label><select id="compiler-language"><option value="cpp">C++ · primary</option><option value="java">Java</option><option value="python">Python 3</option></select><div class="compiler-consent"><span class="compiler-symbol" aria-hidden="true">{ }</span><h3>Your idea, running code.</h3><p>Load OneCompiler to write code, enter standard input and see output here. Code you enter is handled by OneCompiler; CourseCairn does not send your profile, notes or progress.</p><button type="button" class="button button-primary" id="compiler-load">Load C++ compiler</button></div><button type="button" class="button button-primary" id="compiler-run" hidden>Run code ▶</button><div id="compiler-frame"></div><p id="compiler-status" role="status"></p><p class="small-muted">The diagram explains the selected algorithm; it does not animate your custom code. Copy your code before switching languages or leaving this page. Compiler drafts are not saved to your CourseCairn account.</p><a id="compiler-external" href="https://onecompiler.org/cpp" target="_blank" rel="noopener noreferrer">Open compiler in a new tab ↗</a><span class="compiler-credit">Execution powered by OneCompiler</span>`;
  const divider=document.createElement('div');divider.className='compiler-divider';divider.tabIndex=0;divider.setAttribute('role','separator');divider.setAttribute('aria-label','Resize visual and compiler panels');divider.setAttribute('aria-orientation','vertical');divider.setAttribute('aria-valuemin','30');divider.setAttribute('aria-valuemax','70');divider.innerHTML='<span aria-hidden="true">⋮</span>';
  let split=50;
  const setSplit=value=>{split=Math.max(30,Math.min(70,value));workbench.style.setProperty('--visual-share',split+'fr');workbench.style.setProperty('--compiler-share',(100-split)+'fr');divider.setAttribute('aria-valuenow',String(Math.round(split)))};
  setSplit(50);
  divider.onpointerdown=e=>{if(e.button!==0)return;divider.setPointerCapture(e.pointerId);divider.classList.add('dragging');e.preventDefault()};
  divider.onpointermove=e=>{if(!divider.hasPointerCapture(e.pointerId))return;const rect=workbench.getBoundingClientRect();setSplit((e.clientX-rect.left)/rect.width*100)};
  divider.onpointerup=e=>{if(divider.hasPointerCapture(e.pointerId))divider.releasePointerCapture(e.pointerId);divider.classList.remove('dragging')};divider.onlostpointercapture=()=>divider.classList.remove('dragging');
  divider.onkeydown=e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();setSplit(e.key==='Home'?30:e.key==='End'?70:split+(e.key==='ArrowLeft'?-5:5))}};
  divider.ondblclick=()=>setSplit(50);
  workbench.append(divider,panel);
  const toolbar=document.createElement('div');toolbar.className='lab-layout-toolbar';toolbar.innerHTML='<span>VISUAL + CODE WORKSPACE</span><button class="button button-secondary" id="lab-exit-focus" hidden>↙ Exit large view</button><details class="lab-layout-menu"><summary aria-label="Workspace layout options" title="Workspace layout options">⋯</summary><div><button type="button" data-layout="focus">⛶ Large workspace</button><button type="button" data-layout="balanced">Equal panels</button><button type="button" data-layout="visual">Larger visual</button><button type="button" data-layout="code">Larger compiler</button></div></details>';
  workbench.prepend(toolbar);
  const exit=toolbar.querySelector('#lab-exit-focus'),menu=toolbar.querySelector('details');
  const focusMode=enabled=>{workbench.classList.toggle('lab-large',enabled);exit.hidden=!enabled;if(enabled){exit.focus();workbench.scrollTop=0}else toolbar.querySelector('summary').focus()};
  exit.onclick=()=>focusMode(false);
  toolbar.querySelectorAll('[data-layout]').forEach(button=>button.onclick=()=>{const mode=button.dataset.layout;menu.open=false;if(mode==='focus')focusMode(true);else setSplit(mode==='visual'?65:mode==='code'?35:50)});
  workbench.addEventListener('keydown',e=>{if(e.key==='Escape'&&workbench.classList.contains('lab-large')){e.preventDefault();focusMode(false)}});

  const select=panel.querySelector('select'),load=panel.querySelector('#compiler-load'),host=panel.querySelector('#compiler-frame'),status=panel.querySelector('#compiler-status');
  let loaded=false,previous='cpp';
  function launch(){
   const language=select.value;
   const frame=document.createElement('iframe');
   frame.title=`${languages[language]} code editor and execution output — OneCompiler`;
   frame.referrerPolicy='no-referrer';
   frame.src=`https://onecompiler.org/embed/${language}?hideLanguageSelection=true&theme=dark&listenToEvents=true`;
   status.textContent='Loading editor… If it is unavailable, use the new-tab link below.';
   frame.onload=()=>{status.textContent='Use Run inside the editor. If the editor is blocked, use the new-tab link below.'};
   host.replaceChildren(frame);loaded=true;panel.querySelector('#compiler-run').hidden=false;
   panel.querySelector('.compiler-consent').hidden=true;
  }
  select.onchange=()=>{
   if(loaded&&!window.confirm('Changing language reloads the editor. Copy any code you want to keep first. Continue?')){select.value=previous;return}
   previous=select.value;
   panel.querySelector('#compiler-external').href=`https://onecompiler.org/${previous}`;
   load.textContent=`Load ${languages[previous]} compiler`;
   if(loaded)launch();
  };
  panel.querySelector('#compiler-run').onclick=()=>{host.querySelector('iframe')?.contentWindow.postMessage({eventType:'triggerRun'},'https://onecompiler.org')};
  load.onclick=launch;
 }
 globalThis.DsaCompiler={mount};
})();
