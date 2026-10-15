/* Runs only in an opaque-origin sandbox frame, never in the account page. */
(()=>{
 let worker,timer,url,started=false;
 const send=data=>parent.postMessage({channel:'cairn-python',...data},'*');
 const stop=()=>{clearTimeout(timer);worker?.terminate();if(url)URL.revokeObjectURL(url)};
 addEventListener('message',event=>{
  if(event.source!==parent||event.data?.channel!=='cairn-python-start'||started)return;
  const {workerSource,runner,code,stdin}=event.data;
  if(typeof workerSource!=='string'||workerSource.length>30000||typeof runner!=='string'||runner.length>30000||typeof code!=='string'||code.length>20000||typeof stdin!=='string'||stdin.length>10000)return;
  started=true;
  try{
   url='data:text/javascript;charset=utf-8,'+encodeURIComponent(workerSource);
   worker=new Worker(url,{type:'module'});
   timer=setTimeout(()=>{stop();send({type:'error',message:'Python could not load within 60 seconds. Check your connection and try again.'})},60000);
   worker.onerror=error=>{stop();send({type:'error',message:'Python runtime could not start: '+String(error.message||'worker blocked by browser').slice(0,500)})};
   worker.onmessage=e=>{if(e.data?.type==='running'){clearTimeout(timer);timer=setTimeout(()=>{stop();send({type:'error',message:'Stopped after 10 seconds. Use a smaller input or check for an infinite loop.'})},10000)}send(e.data);if(['result','error'].includes(e.data?.type))stop()};
   worker.postMessage({runner,code,stdin});
  }catch{stop();send({type:'error',message:'This browser could not create the isolated Python worker.'})}
 });
})();
