'use strict';
(() => {
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 const toggle=$('#home-dropdown-toggle'),menu=$('#home-dropdown-menu'),dropdown=$('.home-dropdown');
 let hoverTimer;
 function setHome(open){toggle?.setAttribute('aria-expanded',String(open));menu?.classList.toggle('open',open)}
 const closeHome=()=>setHome(false);
 toggle?.addEventListener('click',()=>{clearTimeout(hoverTimer);setHome(toggle.getAttribute('aria-expanded')!=='true')});
 dropdown?.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'&&matchMedia('(min-width: 1051px) and (hover: hover)').matches){clearTimeout(hoverTimer);setHome(true)}});
 dropdown?.addEventListener('pointerleave',()=>{if(matchMedia('(min-width: 1051px) and (hover: hover)').matches){hoverTimer=setTimeout(()=>{if(!dropdown.contains(document.activeElement))closeHome()},160)}});
 document.addEventListener('click',e=>{if(!e.target.closest('.home-dropdown'))closeHome()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){e.preventDefault();closeHome();toggle.focus()}});
 toggle?.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();setHome(true);const links=[...menu.querySelectorAll('a')];(e.key==='ArrowDown'?links[0]:links[links.length-1])?.focus()}});
 dropdown?.addEventListener('focusout',e=>{if(!e.currentTarget.contains(e.relatedTarget))closeHome()});
 $('#menu-toggle')?.addEventListener('click',()=>{if($('#menu-toggle').getAttribute('aria-expanded')==='false')closeHome()});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 $$('[data-gallery-step]').forEach(button=>button.addEventListener('click',()=>{const gallery=$('#sport-gallery');if(gallery)gallery.scrollBy({left:Number(button.dataset.galleryStep)*gallery.clientWidth*.85*(document.documentElement.dir==='rtl'?-1:1),behavior:reduced.matches?'instant':'smooth'})}));
 const reveal=$$('.reveal');
 let revealObserver;
 if('IntersectionObserver' in window&&!reduced.matches){revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');revealObserver.unobserve(e.target)}}),{threshold:.06});reveal.forEach(el=>revealObserver.observe(el));document.documentElement.classList.add('js-motion')}
 const film=$('#hero-film'),filmToggle=$('#hero-film-toggle');
 function filmState(){if(filmToggle){filmToggle.textContent=film.paused?'▶ PLAY BACKGROUND FILM':'Ⅱ PAUSE BACKGROUND FILM';filmToggle.setAttribute('aria-pressed',String(!film.paused))}}
 if(film){film.addEventListener('play',filmState);film.addEventListener('pause',filmState);filmToggle?.addEventListener('click',()=>{if(film.paused)film.play().catch(()=>{filmState();filmToggle.textContent='▶ TRY PLAYING AGAIN'});else film.pause()});if(!reduced.matches&&!navigator.connection?.saveData)film.play().catch(filmState);filmState();film.addEventListener('error',()=>{filmToggle.textContent='FILM UNAVAILABLE';filmToggle.disabled=true})}
 reduced.addEventListener?.('change',()=>{if(reduced.matches){document.documentElement.classList.remove('js-motion');revealObserver?.disconnect();film?.pause()}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)$$('video').forEach(v=>v.pause())});
 // Pause the background film when its hero has left the viewport.
 if(film&&'IntersectionObserver' in window){const visibility=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)film.pause()},{threshold:0});visibility.observe(film)}
 const progress=$('#scroll-progress'),top=$('#floating-top');let scheduled=false;
 function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;const value=max>0?Math.max(0,Math.min(1,scrollY/max)):0;if(progress)progress.style.transform=`scaleX(${value})`;top?.classList.toggle('visible',scrollY>600);scheduled=false}
 addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll)}},{passive:true});addEventListener('resize',updateScroll);updateScroll();
 top?.addEventListener('click',()=>scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'}));
 $$('[data-blog-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.blogFilter;$$('[data-blog-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;$$('[data-blog-category]').forEach(card=>{const show=filter==='all'||card.dataset.blogCategory===filter;card.hidden=!show;if(show){count++;card.classList.add('in-view')}});if($('#blog-count'))$('#blog-count').textContent=`${count} ${count===1?'story':'stories'} ${filter==='all'?'for your next game':'about '+filter}`}));
})();
