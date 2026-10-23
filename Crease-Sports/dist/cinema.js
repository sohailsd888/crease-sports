'use strict';
(() => {
 const hero=document.querySelector('#cinema-hero');if(!hero)return;
 const $=s=>hero.querySelector(s),scenes=[...hero.querySelectorAll('[data-cinema-scene]')],tabs=[...hero.querySelectorAll('[data-cinema-select]')];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),film=$('#cinema-video');
 const edits=[{sport:'cricket',label:'THE CRICKET EDIT',title:'Find your<br>sweet spot.',script:'Make the next one count.',description:'For the first net session. The clean strike.<br>The moments that make you come back.'},{sport:'football',label:'THE FOOTBALL EDIT',title:'Make your<br>next move.',script:'Better with your squad.',description:'For the weekend fixture. The extra pass.<br>The game you never want to end.'},{sport:'fitness',label:'THE TRAINING EDIT',title:'Show up.<br>Go all in.',script:'Find your everyday extra.',description:'For the early start. The next repetition.<br>The sessions that belong to you.'}];
 let index=0,timer=null,paused=reduced.matches||Boolean(navigator.connection?.saveData),manualPause=paused;
 function stopTimer(){if(timer!==null){clearTimeout(timer);timer=null}}
 function filmState(){if(film){if(index===0&&!paused&&!document.hidden)film.play().catch(()=>{});else film.pause()}}
 function refreshPause(){hero.classList.toggle('is-paused',paused);const b=$('#cinema-pause');b.textContent=paused?'▶ Resume motion':'Ⅱ Pause motion';b.setAttribute('aria-pressed',String(paused));b.setAttribute('aria-label',paused?'Resume hero motion':'Pause hero motion');filmState()}
 function schedule(){stopTimer();if(!paused&&!document.hidden)timer=setTimeout(()=>{show((index+1)%edits.length,false)},9000)}
 function show(next,announce=true){index=(next+edits.length)%edits.length;const edit=edits[index];hero.dataset.scene=String(index);scenes.forEach((s,i)=>{s.classList.toggle('is-active',i===index);s.setAttribute('aria-hidden',String(i!==index))});tabs.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));$('#cinema-description').innerHTML=edit.description;$('#cinema-scene-label').textContent=edit.label;$('#cinema-scene-title').innerHTML=edit.title;$('#cinema-script').textContent=edit.script;$('#cinema-index').textContent=`0${index+1} / 03`;const a=$('#cinema-shop');a.href=`products.html?sport=${edit.sport}`;a.childNodes[0].textContent=`Shop ${edit.sport} gear `;if(announce)$('#cinema-announcement').textContent=`${edit.sport.charAt(0).toUpperCase()+edit.sport.slice(1)} edit selected.`;refreshPause();schedule()}
 tabs.forEach(b=>b.addEventListener('click',()=>show(Number(b.dataset.cinemaSelect))));$('#cinema-prev').addEventListener('click',()=>show(index-1));$('#cinema-next').addEventListener('click',()=>show(index+1));$('#cinema-pause').addEventListener('click',()=>{paused=!paused;manualPause=paused;refreshPause();schedule()});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){stopTimer();film?.pause()}else{refreshPause();schedule()}});
 reduced.addEventListener?.('change',()=>{if(reduced.matches){paused=true;manualPause=true;refreshPause();stopTimer()}});
 if('IntersectionObserver'in window){new IntersectionObserver(entries=>{if(!entries[0].isIntersecting){stopTimer();film?.pause()}else if(!manualPause){refreshPause();schedule()}},{threshold:.1}).observe(hero)}
 hero.addEventListener('focusin',()=>{stopTimer()});hero.addEventListener('focusout',e=>{if(!hero.contains(e.relatedTarget))schedule()});refreshPause();schedule();
})();
