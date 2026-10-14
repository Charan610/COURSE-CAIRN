/* Opt-in device storage. Encryption does not isolate this from same-origin scripts. */
(()=>{
 const DB='coursecairn-assistant-device-v1',STORE='connections',TTL=30*24*60*60*1000;
 const encoder=new TextEncoder(),decoder=new TextDecoder();
 function ownerId(id){if(typeof id!=='string'||!id||id.length>128)throw new Error('Sign in before saving an AI connection.');return id}
 function valid(c){return c&&['google','openrouter'].includes(c.provider)&&typeof c.apiKey==='string'&&c.apiKey.length>=10&&c.apiKey.length<=512&&!/\s/.test(c.apiKey)&&c.consent===true&&(c.provider!=='google'||c.freeTierConfirmed===true)}
 async function database(){return new Promise((resolve,reject)=>{const request=indexedDB.open(DB,1);request.onupgradeneeded=()=>request.result.createObjectStore(STORE);request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(new Error('Device storage is unavailable.'));request.onblocked=()=>reject(new Error('Close other CourseCairn tabs and try again.'))})}
 async function operation(id,mode,action){const db=await database();try{return await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,mode);let result;tx.oncomplete=()=>resolve(result);tx.onerror=tx.onabort=()=>reject(new Error('Device storage could not be updated.'));const request=action(tx.objectStore(STORE),id);request.onsuccess=()=>{result=request.result}})}finally{db.close()}}
 async function remove(id){return operation(ownerId(id),'readwrite',(store,key)=>store.delete(key))}
 async function save(id,c){ownerId(id);if(!valid(c))throw new Error('A valid connection and sharing consent are required.');
  const key=await crypto.subtle.generateKey({name:'AES-GCM',length:256},false,['encrypt','decrypt']),iv=crypto.getRandomValues(new Uint8Array(12));
  const value={provider:c.provider,apiKey:c.apiKey,freeTierConfirmed:c.freeTierConfirmed===true,consent:true};
  const ciphertext=await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:encoder.encode(id)},key,encoder.encode(JSON.stringify(value)));
  await operation(id,'readwrite',(store,owner)=>store.put({version:1,key,iv,ciphertext,expiresAt:Date.now()+TTL},owner));
 }
 async function load(id){ownerId(id);const record=await operation(id,'readonly',(store,key)=>store.get(key));if(!record)return null;
  if(record.version!==1||!Number.isFinite(record.expiresAt)||record.expiresAt<=Date.now()){await remove(id);return null}
  try{const decrypted=await crypto.subtle.decrypt({name:'AES-GCM',iv:record.iv,additionalData:encoder.encode(id)},record.key,record.ciphertext);const value=JSON.parse(decoder.decode(decrypted));if(!valid(value))throw new Error('Invalid connection');return value}catch{await remove(id);return null}
 }
 // Keep a disconnect/sign-out behind any in-progress save for the same account.
 const pending=new Map();
 function enqueue(id,action){const task=(pending.get(id)||Promise.resolve()).catch(()=>{}).then(action);pending.set(id,task);const cleanup=()=>{if(pending.get(id)===task)pending.delete(id)};task.then(cleanup,cleanup);return task}
 globalThis.CairnConnectionStore={save:(id,c)=>enqueue(id,()=>save(id,c)),load:id=>enqueue(id,()=>load(id)),remove:id=>enqueue(id,()=>remove(id))};
})();
