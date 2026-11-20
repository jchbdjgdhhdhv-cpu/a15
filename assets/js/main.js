(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var tg=[].slice.call(document.querySelectorAll('.tg'));if(tg.length){var MSG=['The coat is open. Tap a toggle to fasten it.','One toggle fastened. Breezy, but tidy.','Two fastened: the classic casual way to wear it.','Three fastened. Ready for a cold walk.','All four fastened. Hood up, and the wind can do its worst.'];
 function upd(){var n=tg.filter(function(t){return t.classList.contains('on');}).length;$('tg-o').textContent=MSG[n];var o=(4-n)*3;$('c-fl').style.transform='translateX(-'+o+'px)';$('c-fr').style.transform='translateX('+o+'px)';}
 tg.forEach(function(t){t.setAttribute('role','button');t.setAttribute('tabindex','0');t.setAttribute('aria-label','Toggle '+(+t.getAttribute('data-i')+1));function f(){t.classList.toggle('on');t.setAttribute('aria-pressed',t.classList.contains('on'));upd();}t.addEventListener('click',f);t.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();f();}});});
 $('tg-all').addEventListener('click',function(){tg.forEach(function(t,i){setTimeout(function(){t.classList.add('on');upd();},i*180);});});$('tg-none').addEventListener('click',function(){tg.forEach(function(t){t.classList.remove('on');});upd();});
 tg[0].classList.add('on');tg[1].classList.add('on');upd();}
var line=$('tl-fill');if(line){var w=line.parentElement.parentElement;function tl(){var r=w.getBoundingClientRect(),h=innerHeight,p=Math.max(0,Math.min(1,(h*0.6-r.top)/r.height));line.style.height=(p*100)+'%';}addEventListener('scroll',tl,{passive:true});tl();}
var fc=$('ft-c');if(fc){var ly=[].slice.call(document.querySelectorAll('input[name=ly]')),ln=[].slice.call(document.querySelectorAll('input[name=ln]'));function v(a){var x=0;a.forEach(function(e){if(e.checked)x=+e.value;});return x;}
 var LN=[['hip length','easy for cycling and driving'],['thigh length','the classic, most versatile choice'],['knee length','the warmest, ideal over tailoring']];
 function fit(){var c=+fc.value,e=v(ly),l=v(ln),coat=c+e+4;$('ft-cv').textContent=c+' cm';$('ft-o').textContent=coat+' cm';$('ft-t').innerHTML='Look for a coat chest of about '+coat+' cm, '+(e+4)+' cm above your body, in a '+LN[l][0]+': '+LN[l][1]+'. Fasten the toggles: they should close without pulling.';
  var r=$('ft-coat');r.setAttribute('height',[130,170,215][l]);r.setAttribute('x',34-(e-4)/2);r.setAttribute('width',92+(e-4));}
 fc.addEventListener('input',fit);ly.concat(ln).forEach(function(e){e.addEventListener('change',fit);});fit();}
})();
