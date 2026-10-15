self.onmessage=async event=>{
 try{
  const {loadPyodide}=await import("https://cdn.jsdelivr.net/pyodide/v314.0.7/full/pyodide.mjs");
  const python=await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/'});
  python.globals.set('_cairn_source',event.data.code);
  python.globals.set('_cairn_stdin',event.data.stdin);
  self.postMessage({type:'running'});
  const result=python.runPython(event.data.runner);
  if(typeof result!=='string'||result.length>6000000)throw Error('Trace is too large. Reduce the input.');
  self.postMessage({type:'result',result:JSON.parse(result)});
 }catch(error){self.postMessage({type:'error',message:String(error.message||error).slice(0,1500)})}
};
