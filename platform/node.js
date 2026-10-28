/* THE LAST PLATFORM — the node. Served from moonline.codifiedresonance.com/platform/ and loaded by
   the embed on codifiedresonance.com/last-platform/node. Add a game: the EMERGENCES array, below. */
(function(){
  var mount = document.getElementById("lp-node");
  if(!mount) return;
  mount.innerHTML = "<div class=\"lp-sky\" aria-hidden=\"true\"><span class=\"s3\"></span><span class=\"s2\"></span><span class=\"s1\"></span></div>\n<div class=\"lp-scan\" aria-hidden=\"true\"></div>\n\n<!-- ---------- intro cinematic ---------- -->\n<div id=\"lp-cinematic\">\n  <div class=\"lp-cine-inner\">\n    <p class=\"lp-line lp-loading lp-line-1\">Loading</p>\n    <p class=\"lp-line lp-line-main lp-line-2\">This is The Last Platform.</p>\n    <p class=\"lp-line lp-line-3\">The descent has begun.</p>\n    <p class=\"lp-line lp-line-4 lp-welcome\">Welcome back.</p>\n  </div>\n</div>\n\n\n<!-- ---------- the descent ---------- -->\n<main class=\"lp-descent\" id=\"lpDescent\" tabindex=\"-1\" aria-label=\"The descent \u2014 games that have emerged\">\n  <div class=\"lp-strip\" id=\"lpStrip\">\n    <div class=\"lp-rail\" aria-hidden=\"true\"><div class=\"lp-pulse\" id=\"lpPulse\"></div></div>\n    <!-- emergences are written here from the EMERGENCES array -->\n  </div>\n</main>\n\n<div class=\"lp-chrome lp-chrome-tl\" id=\"lpChromeA\">The Last Platform</div>\n<div class=\"lp-chrome lp-chrome-br\" id=\"lpChromeC\">\n  <span>travel</span><span class=\"lp-travel\">&rsaquo;</span>\n</div>";
  try{if(sessionStorage.getItem('lp.intro.seen')==='1'&&!/[?&]intro=1/.test(location.search||''))document.getElementById('lp-cinematic').style.display='none';}catch(e){}
})();

(function(){
  'use strict';
  document.body.classList.add('lp-last-platform');   // marks the page as its own

  /* ============================================================
     THE EMERGENCES
     One object per game. Order is the order they emerged.
     `mark` is the game's own wordmark — the platform frames it,
     never restyles it. `craters` is MOONLINE's lunar treatment;
     a future game brings whatever its mark needs.
     ============================================================ */
  var EMERGENCES = [
    {
      href:'/last-platform/moonline',
      inscription:'\u00b7 first emerged \u00b7',
      mark:'MOONLINE',
      craters:[
        {l:15,t:6,  s:5.2, o:.68},
        {l:41,t:60, s:3.2, o:.55},
        {l:63,t:12, s:6.6, o:.6},
        {l:82,t:52, s:2.4, o:.5}
      ],
      line:'Velocity across the cosmos. Five crossings, and a voyage beyond them, where the forces themselves are the opposition \u2014 impact, light, heat, current, gravity, rhythm.'
    }
    /* next emergence goes here */
  ];

  var CODEX = 'More will emerge here. They will not be announced.';

  /* ---------- build the strip ---------- */
  var strip = document.getElementById('lpStrip');
  var frag = document.createDocumentFragment();

  EMERGENCES.forEach(function(e){
    var a = document.createElement('a');
    a.className = 'lp-emergence lp-live';
    a.href = e.href;
    a.setAttribute('aria-label','Enter ' + e.mark);

    var craters = (e.craters||[]).map(function(c){
      return '<span class="lp-crater" style="left:'+c.l+'%;top:'+c.t+'%;width:'+c.s+'%;padding-bottom:'+c.s+'%;opacity:'+c.o+'"></span>';
    }).join('');

    a.innerHTML =
      '<span class="lp-node" aria-hidden="true"></span>' +
      '<span class="lp-inscription">'+e.inscription+'</span>' +
      '<span class="lp-markwrap" aria-hidden="true">'+craters+
        '<span class="lp-markword">'+e.mark+'</span></span>' +
      '<p class="lp-line-copy">'+e.line+'</p>' +
      '<span class="lp-enter">Enter <span class="lp-arrow">&rsaquo;</span></span>';
    frag.appendChild(a);
  });

  var unformed = document.createElement('div');
  unformed.className = 'lp-unformed';
  unformed.innerHTML = '<p class="lp-codex lp-live">'+CODEX+'</p>';
  frag.appendChild(unformed);
  strip.appendChild(frag);

  /* ---------- the carrier: measure the rail, time the catches ---------- */
  var CARRY_SECONDS_PER_1000PX = 4.2;   // the signal travels at a constant pace
  var pulse = document.getElementById('lpPulse');

  function tuneCarrier(){
    var w = strip.scrollWidth;
    var dur = Math.max(9, (w/1000) * CARRY_SECONDS_PER_1000PX);
    strip.style.setProperty('--carry', dur + 's');
    document.documentElement.style.setProperty('--carry', dur + 's');
    pulse.style.setProperty('--carry-end', w + 'px');
    pulse.style.setProperty('--carry', dur + 's');
    // everything on the rail catches the light as the pulse arrives at it
    var origin = strip.getBoundingClientRect().left;
    function syncToCarrier(el, at){
      var r = el.getBoundingClientRect();
      var x = (r.left - origin) + r.width * at;
      el.style.setProperty('--carry', dur + 's');
      el.style.setProperty('--catch', (-(dur * (1 - Math.min(1, x / w)))).toFixed(2) + 's');
    }
    strip.querySelectorAll('.lp-emergence').forEach(function(m){ syncToCarrier(m, 0.18); });
    var codex = strip.querySelector('.lp-codex');
    if(codex) syncToCarrier(codex, 0.5);
  }

  /* ---------- travelling the descent ---------- */
  var descent = document.getElementById('lpDescent');

  // a vertical wheel becomes horizontal travel
  descent.addEventListener('wheel', function(ev){
    if(Math.abs(ev.deltaY) <= Math.abs(ev.deltaX)) return;
    ev.preventDefault();
    descent.scrollLeft += ev.deltaY;
  }, {passive:false});

  // drag to pan
  var down=false, startX=0, startL=0, moved=0;
  descent.addEventListener('pointerdown', function(ev){
    if(ev.pointerType==='mouse' && ev.button!==0) return;
    down=true; moved=0; startX=ev.clientX; startL=descent.scrollLeft;
    descent.classList.add('is-dragging');
  });
  descent.addEventListener('pointermove', function(ev){
    if(!down) return;
    var dx = ev.clientX - startX;
    moved = Math.max(moved, Math.abs(dx));
    if(ev.pointerType==='mouse'){ descent.scrollLeft = startL - dx; }
  });
  function release(){ down=false; descent.classList.remove('is-dragging'); }
  descent.addEventListener('pointerup', release);
  descent.addEventListener('pointercancel', release);
  // a drag should not also open a game
  descent.addEventListener('click', function(ev){
    if(moved > 8){ ev.preventDefault(); moved = 0; }
  }, true);

  // keyboard
  window.addEventListener('keydown', function(ev){
    if(ev.key==='ArrowRight'){ descent.scrollBy({left: window.innerWidth*0.72, behavior:'smooth'}); }
    if(ev.key==='ArrowLeft'){ descent.scrollBy({left:-window.innerWidth*0.72, behavior:'smooth'}); }
  });

  /* ---------- parallax: the field moves with you ---------- */
  var s1=document.querySelector('.lp-sky .s1'),
      s2=document.querySelector('.lp-sky .s2'),
      s3=document.querySelector('.lp-sky .s3');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onTravel(){
    var x = descent.scrollLeft;
    if(!reduce){
      s1.style.transform = 'translateX(' + (-x*0.16) + 'px)';
      s2.style.transform = 'translateX(' + (-x*0.08) + 'px)';
      s3.style.transform = 'translateX(' + (-x*0.03) + 'px)';
    }
  }
  descent.addEventListener('scroll', onTravel, {passive:true});
  window.addEventListener('resize', function(){ tuneCarrier(); onTravel(); });

  /* ---------- the count, stated once ---------- */
  var n = EMERGENCES.length;
  var words = ['none','one','two','three','four','five','six','seven','eight','nine','ten'];
  document.getElementById('lpChromeA').textContent =
    'The Last Platform \u00b7 ' + (words[n]||n) + ' emerged';

  /* ---------- the cinematic, then the descent opens ---------- */
  var overlay = document.getElementById('lp-cinematic');
  var lines = [1,2,3,4].map(function(i){ return overlay.querySelector('.lp-line-'+i); });
  var show = function(el,d){ setTimeout(function(){ el && el.classList.add('is-visible'); }, d); };
  var hide = function(el,d){ setTimeout(function(){ el && el.classList.remove('is-visible'); }, d); };

  // the full arrival once per visit; within the same visit you are already here
  var INTRO_KEY = 'lp.intro.seen';
  var arrived = false;
  try{ arrived = sessionStorage.getItem(INTRO_KEY)==='1' && !/[?&]intro=1/.test(location.search||''); }catch(e){}
  function openDescent(){
    document.querySelector('.lp-descent').classList.add('is-open');
    document.getElementById('lpChromeA').classList.add('is-open');
    document.getElementById('lpChromeC').classList.add('is-open');
  }

  if(arrived){
    overlay.style.display='none';
    openDescent();
  }else{
    show(lines[0], 150);    // Loading
    hide(lines[0], 2600);
    show(lines[1], 2700);   // This is The Last Platform.
    show(lines[2], 5100);   // The descent has begun.
    show(lines[3], 7300);   // Welcome back.

    setTimeout(function(){
      overlay.classList.add('lp-done');
      openDescent();
      try{ sessionStorage.setItem(INTRO_KEY,'1'); }catch(e){}
      setTimeout(function(){ overlay.style.display='none'; }, 950);
    }, 9800);
  }

  tuneCarrier();
  // fonts can change the measure; re-tune once they land
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(tuneCarrier); }
})();
