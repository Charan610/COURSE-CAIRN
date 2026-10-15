/* Diagrams compare recorded states. They never run the selected catalog algorithm. */
(()=>{
 const flat=v=>v&&['list','tuple','deque'].includes(v.kind)&&Array.isArray(v.items)&&v.items.every(x=>x===null||['number','string','boolean'].includes(typeof x));
 function indexValue(text,vars){
  const tokens=text.match(/[A-Za-z_]\w*|\d+|[()+\-*/%]/g)||[];
  if(tokens.join('')!==text.replace(/\s/g,''))return null;
  let p=0,steps=0;
  const precedence={'+':1,'-':1,'*':2,'/':2,'%':2};
  function parse(min=0){if(++steps>40)throw Error();let t=tokens[p++],value;if(t==='('){value=parse();if(tokens[p++]!==')')throw Error()}else if(t==='-'||t==='+')value=(t==='-'?-1:1)*parse(3);else if(/^\d+$/.test(t||''))value=Number(t);else value=vars[t];if(typeof value!=='number'||!Number.isSafeInteger(value))throw Error();while(p<tokens.length&&precedence[tokens[p]]>=min){const op=tokens[p++],right=parse(precedence[op]+1);if((op==='/'||op==='%')&&!right)throw Error();value=op==='+'?value+right:op==='-'?value-right:op==='*'?value*right:op==='/'?Math.trunc(value/right):value%right}return value}
  try{const v=parse();return p===tokens.length&&Number.isSafeInteger(v)?v:null}catch{return null}
 }
 function model(events,cursor,source){
  const e=events[cursor],before=events[cursor-1],vars=e?.frames?.[0]?.variables||{},previous=before?.frames?.[0]?.variables||{},lines=source.split('\n');
  const rows=Object.entries(vars).filter(([,v])=>flat(v)).slice(0,8).map(([name,v])=>{const old=previous[name];return {name,id:v.id,size:v.size,items:v.items,changed:v.items.map((x,i)=>!flat(old)||i>=old.items.length||x!==old.items[i]),markers:[]}});
  const currentLine=lines[(e?.line||1)-1]||'';
  for(const match of currentLine.matchAll(/\b([A-Za-z_]\w*)\s*\[([^\]\n]+)\]/g)){const row=rows.find(r=>r.name===match[1]),index=indexValue(match[2],vars);if(row&&index!==null&&!row.markers.some(m=>m.expression===match[2]))row.markers.push({index,expression:match[2].trim()})}
  let transfer=e?.transfer||null;
  if(!transfer&&e?.event==='line'&&before?.event==='line'){
   const line=lines[before.line-1]||'',copy=line.match(/^\s*([A-Za-z_]\w*)\s*\[([^\]]+)\]\s*=\s*([A-Za-z_]\w*)\s*\[([^\]]+)\]\s*(?:;\s*)?(?:\/\/.*|#.*)?$/);
   if(copy){const toIndex=indexValue(copy[2],previous),fromIndex=indexValue(copy[4],previous),to=vars[copy[1]],from=previous[copy[3]];if(flat(to)&&flat(from)&&toIndex!==null&&fromIndex!==null&&toIndex>=0&&fromIndex>=0&&toIndex<to.items.length&&fromIndex<from.items.length&&to.items[toIndex]===from.items[fromIndex])transfer={toName:copy[1],fromName:copy[3],toId:to.id,fromId:from.id,toIndex,fromIndex,value:from.items[fromIndex]}}
  }
  const scalars=Object.entries(vars).filter(([,v])=>v===null||typeof v!=='object').slice(0,16).map(([name,value])=>({name,value,changed:JSON.stringify(previous[name])!==JSON.stringify(value)}));
  const changed=rows.flatMap(r=>r.items.flatMap((value,i)=>r.changed[i]?[`${r.name}[${i}] = ${value}`]:[]));
  let explanation=e?.label||'';
  if(!explanation&&transfer)explanation=`Copy ${transfer.value}: ${transfer.fromName}[${transfer.fromIndex}] → ${transfer.toName}[${transfer.toIndex}].`;
  if(!explanation&&changed.length)explanation=`State change after the previous code step: ${changed.slice(0,5).join('; ')}${changed.length>5?'…':''}.`;
  if(!explanation)explanation=e?.event==='line'?`Next, execute line ${e.line}. The values below are the state before that line.`:`${e?.event||'Execution'} at line ${e?.line||1}.`;
  return {rows,scalars,transfer,explanation};
 }
 function render(events,cursor,source,esc){
  const data=model(events,cursor,source),cell=58,left=105,top=72,rowHeight=124,width=Math.max(540,left+Math.max(1,...data.rows.map(r=>r.items.length))*cell+35),height=Math.max(160,top+data.rows.length*rowHeight);
  let body='';const locate=(id,index)=>{const row=data.rows.findIndex(r=>r.id===id);return row<0?null:{x:left+index*cell+25,y:top+row*rowHeight+22}};
  data.rows.forEach((row,r)=>{const y=top+r*rowHeight;body+=`<text x="12" y="${y+24}" fill="#f7f2df" font-size="13" font-weight="700">${esc(row.name)}</text>`;
   if(!row.items.length)body+=`<text x="${left}" y="${y+24}" fill="#bdcbb6">Empty array</text>`;
   row.items.forEach((value,i)=>{const from=data.transfer?.fromId===row.id&&data.transfer.fromIndex===i,to=data.transfer?.toId===row.id&&data.transfer.toIndex===i,fill=to?'#ffd26e':from?'#efac83':row.changed[i]?'#c5e4a2':'#f7f4e7';body+=`<rect x="${left+i*cell}" y="${y}" width="50" height="44" rx="8" fill="${fill}" stroke="${row.changed[i]?'#99c66c':'#9dab92'}" stroke-width="${row.changed[i]?3:1}"/><text x="${left+i*cell+25}" y="${y+28}" text-anchor="middle" fill="#21382a" font-size="16" font-weight="700">${esc(String(value).slice(0,8))}</text><text x="${left+i*cell+25}" y="${y+63}" text-anchor="middle" fill="#bdcbb6" font-size="11">[${i}]</text>`});
   row.markers.slice(0,3).forEach((m,n)=>{if(m.index>=0&&m.index<row.items.length){const x=left+m.index*cell+25;body+=`<path d="M${x},${y-19-n*18} V${y-5}" stroke="#ffd26e" stroke-width="2" marker-end="url(#code-trace-arrow)"/><text x="${x}" y="${y-27-n*18}" text-anchor="middle" fill="#ffd26e" font-size="11">${esc(m.expression)} = ${m.index}</text>`}});
   if(row.size>row.items.length)body+=`<text x="${left}" y="${y+87}" fill="#bdcbb6" font-size="10">Showing first ${row.items.length} of ${row.size} values</text>`;
  });
  if(data.transfer){const from=locate(data.transfer.fromId,data.transfer.fromIndex),to=locate(data.transfer.toId,data.transfer.toIndex);if(from&&to){const bend=from.y===to.y?-65:0;body+=`<path class="trace-transfer-path" d="M${from.x},${from.y+28} C${from.x},${from.y+80+bend} ${to.x},${to.y-55+bend} ${to.x},${to.y-8}" fill="none" stroke="#ffcc78" stroke-width="3" stroke-dasharray="7 4" marker-end="url(#code-trace-arrow)"/>`}}
  const graph=data.rows.length?`<div class="trace-array-canvas" tabindex="0" aria-label="Arrays with indices and recorded value transfers"><svg viewBox="0 0 ${width} ${height}" style="min-width:${width}px" role="img" aria-label="${esc(data.explanation)}"><defs><marker id="code-trace-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="none" stroke="#ffcc78" stroke-width="1.5"/></marker></defs>${body}</svg></div>`:'<p class="trace-diagram-empty">Arrays appear here as soon as your code creates them. Other objects remain available in Variable details.</p>';
  return `<div class="trace-step-explanation" role="status">${esc(data.explanation)}</div><div class="trace-state-key"><span>● Current value</span><span>● Changed cell</span><span>● Copy source</span><span>● Copy destination</span></div>${graph}<div class="trace-scalar-strip">${data.scalars.map(s=>`<span class="${s.changed?'is-changed':''}"><small>${esc(s.name)}</small><b>${esc(s.value===null?'None':String(s.value))}</b></span>`).join('')}</div>`;
 }
 globalThis.CairnTraceDiagrams={render,model,indexValue};
})();
