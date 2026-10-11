/* A brief, dismissible brand introduction on a fresh document load. */
(()=>{
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 if(motion.matches)return;
 const previous=document.activeElement,overlay=document.createElement('section');
 overlay.className='opening-intro';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','Welcome to CourseCairn');
 overlay.innerHTML='<div class="opening-composition" aria-hidden="true"><div class="opening-orbit"><span class="opening-orbit-dot"></span></div><div class="opening-symbol"></div><svg class="opening-morph" aria-hidden="true"><path class="opening-half-first"/><path class="opening-half-second"/></svg><div class="opening-wordmark"><span class="opening-course"><b>C</b><span class="opening-letters">ourse</span></span><span class="opening-cairn"><b>C</b><span class="opening-letters">airn</span></span></div><div class="opening-rule"></div><p class="opening-tagline">A little further, every day.</p><span class="opening-caption">YOUR LEARNING STUDIO</span></div><button type="button" class="opening-skip">Skip intro <span aria-hidden="true">↗</span></button>';
 document.body.append(overlay);const skip=overlay.querySelector('button');let closed=false,exitTimer,fallback,frame;
 const composition=overlay.querySelector('.opening-composition'),symbol=overlay.querySelector('.opening-symbol'),svg=overlay.querySelector('svg'),paths=[...svg.querySelectorAll('path')],letters=[...overlay.querySelectorAll('.opening-wordmark b')];
 const ease=t=>1-Math.pow(1-Math.max(0,Math.min(1,t)),3);
 const mix=(a,b,t)=>a+(b-a)*t;
 function shape(cx,cy,r,start,sweep,inner){const points=[];for(let i=0;i<=48;i++){const a=start+sweep*i/48;points.push([cx+Math.cos(a)*r,cy+Math.sin(a)*r])}for(let i=48;i>=0;i--){const a=start+sweep*i/48;points.push([cx+Math.cos(a)*r*inner,cy+Math.sin(a)*r*inner])}return points}
 function draw(now){if(closed)return;const elapsed=now-started,box=composition.getBoundingClientRect(),mark=symbol.getBoundingClientRect(),turn=ease((elapsed-120)/580),morph=ease((elapsed-750)/950);svg.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`);paths.forEach((path,i)=>{const target=letters[i].getBoundingClientRect(),cx=mark.left-box.left+mark.width/2,cy=mark.top-box.top+mark.height/2,initial=shape(cx,cy,mark.width*.35,(i?0:Math.PI)+turn*Math.PI/2,Math.PI,0),final=shape(target.left-box.left+target.width/2,target.top-box.top+target.height/2,target.height*.34,Math.PI/4,Math.PI*1.5,.67);path.setAttribute('d',initial.map((point,j)=>(j?'L':'M')+mix(point[0],final[j][0],morph).toFixed(2)+','+mix(point[1],final[j][1],morph).toFixed(2)).join(' ')+'Z');path.style.fill=i?`rgb(${Math.round(mix(52,219,morph))} ${Math.round(mix(91,177,morph))} ${Math.round(mix(64,106,morph))})`:`rgb(${Math.round(mix(20,221,morph))} ${Math.round(mix(43,239,morph))} ${Math.round(mix(33,159,morph))})`});if(elapsed<1800)frame=requestAnimationFrame(draw)}
 const started=performance.now();frame=requestAnimationFrame(draw);
 const focus=e=>{if(!closed&&!overlay.contains(e.target))skip.focus({preventScroll:true})};
 const keys=e=>{if(e.key==='Escape'){e.preventDefault();finish(true)}else if(e.key==='Tab'){e.preventDefault();skip.focus({preventScroll:true})}};
 function finish(immediate=false){if(closed)return;closed=true;cancelAnimationFrame(frame);clearTimeout(exitTimer);clearTimeout(fallback);document.removeEventListener('focusin',focus);document.removeEventListener('keydown',keys);motion.removeEventListener('change',changed);const restore=overlay.contains(document.activeElement);overlay.remove();if(restore){const target=previous?.isConnected&&previous!==document.body?previous:document.querySelector('#auth-username')||document.querySelector('#main');target?.focus({preventScroll:true})}}
 const changed=()=>{if(motion.matches)finish(true)};
 document.addEventListener('focusin',focus);document.addEventListener('keydown',keys);motion.addEventListener('change',changed);skip.onclick=()=>finish(true);skip.focus({preventScroll:true});
 overlay.addEventListener('animationend',e=>{if(e.target===overlay&&e.animationName==='opening-leave')finish()});
 exitTimer=setTimeout(()=>overlay.classList.add('opening-out'),3100);
 fallback=setTimeout(()=>finish(),3650);
})();
