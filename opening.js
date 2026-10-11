/* A brief, dismissible brand introduction on a fresh document load. */
(()=>{
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 if(motion.matches)return;
 const previous=document.activeElement,overlay=document.createElement('section');
 overlay.className='opening-intro';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','Welcome to CourseCairn');
 overlay.innerHTML='<div class="opening-composition" aria-hidden="true"><div class="opening-orbit"><span class="opening-orbit-dot"></span></div><div class="opening-symbol"><span>◒</span></div><div class="opening-wordmark"><span class="opening-course"><b>C</b>ourse</span><span class="opening-cairn"><b>C</b>airn</span></div><div class="opening-rule"></div><p class="opening-tagline">A little further, every day.</p><span class="opening-caption">YOUR LEARNING STUDIO</span></div><button type="button" class="opening-skip">Skip intro <span aria-hidden="true">↗</span></button>';
 document.body.append(overlay);const skip=overlay.querySelector('button');let closed=false,exitTimer,fallback;
 const focus=e=>{if(!closed&&!overlay.contains(e.target))skip.focus({preventScroll:true})};
 const keys=e=>{if(e.key==='Escape'){e.preventDefault();finish(true)}else if(e.key==='Tab'){e.preventDefault();skip.focus({preventScroll:true})}};
 function finish(immediate=false){if(closed)return;closed=true;clearTimeout(exitTimer);clearTimeout(fallback);document.removeEventListener('focusin',focus);document.removeEventListener('keydown',keys);motion.removeEventListener('change',changed);const restore=overlay.contains(document.activeElement);overlay.remove();if(restore){const target=previous?.isConnected&&previous!==document.body?previous:document.querySelector('#auth-username')||document.querySelector('#main');target?.focus({preventScroll:true})}}
 const changed=()=>{if(motion.matches)finish(true)};
 document.addEventListener('focusin',focus);document.addEventListener('keydown',keys);motion.addEventListener('change',changed);skip.onclick=()=>finish(true);skip.focus({preventScroll:true});
 overlay.addEventListener('animationend',e=>{if(e.target===overlay&&e.animationName==='opening-leave')finish()});
 exitTimer=setTimeout(()=>overlay.classList.add('opening-out'),1850);
 fallback=setTimeout(()=>finish(),2400);
})();
