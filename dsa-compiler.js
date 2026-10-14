/* External execution stays in the provider's isolated origin. */
(()=>{
 const languages={cpp:'C++',java:'Java',python:'Python 3'};
 function mount(workbench){
  workbench.classList.add('with-compiler');
  const panel=document.createElement('section');
  panel.className='card panel dsa-compiler';
  panel.innerHTML=`<div class="eyebrow">WRITE · RUN · COMPARE</div><h2>Compiler playground</h2><p>Implement the algorithm while stepping through its visual explanation beside you.</p><label for="compiler-language">Code language</label><select id="compiler-language"><option value="cpp">C++ · primary</option><option value="java">Java</option><option value="python">Python 3</option></select><div class="compiler-consent"><span class="compiler-symbol" aria-hidden="true">{ }</span><h3>Your idea, running code.</h3><p>Load OneCompiler to write code, enter standard input and see output here. Code you enter is handled by OneCompiler; CourseCairn does not send your profile, notes or progress.</p><button type="button" class="button button-primary" id="compiler-load">Load C++ compiler</button></div><button type="button" class="button button-primary" id="compiler-run" hidden>Run code ▶</button><div id="compiler-frame"></div><p id="compiler-status" role="status"></p><p class="small-muted">The diagram explains the selected algorithm; it does not animate your custom code. Copy your code before switching languages or leaving this page. Compiler drafts are not saved to your CourseCairn account.</p><a id="compiler-external" href="https://onecompiler.org/cpp" target="_blank" rel="noopener noreferrer">Open compiler in a new tab ↗</a><span class="compiler-credit">Execution powered by OneCompiler</span>`;
  workbench.append(panel);
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
