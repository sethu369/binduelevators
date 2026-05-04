/* ── LOADER ── */
(()=>{let p=0;const f=document.getElementById('ldf'),t=document.getElementById('ldp'),l=document.getElementById('loader');const iv=setInterval(()=>{p+=Math.random()*14+4;if(p>=100){p=100;clearInterval(iv);setTimeout(()=>l.classList.add('out'),350);}f.style.width=p+'%';t.textContent=Math.floor(p)+'%';},70);})();

/* ── CURSOR ── */
if(window.matchMedia('(pointer:fine)').matches){
  const c=document.getElementById('cur'),r=document.getElementById('curR');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;c.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;});
  (function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;r.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(loop);})();
  document.querySelectorAll('a,button,.svgc,.prc,.gli,.stsc').forEach(el=>{
    el.addEventListener('mouseenter',()=>{c.classList.add('big');r.classList.add('big');});
    el.addEventListener('mouseleave',()=>{c.classList.remove('big');r.classList.remove('big');});
  });
}

/* ── SCROLL ── */
const nav=document.getElementById('nav'),btt=document.getElementById('btt'),wa=document.getElementById('wa');
window.addEventListener('scroll',()=>{
  const s=scrollY>60;
  nav.classList.toggle('solid',s);
  btt.classList.toggle('show',scrollY>400);
  wa.classList.toggle('show',scrollY>300);
  // Active nav
  document.querySelectorAll('.nls a:not(.ncta)').forEach(a=>{
    const href=a.getAttribute('href');
    if(!href.startsWith('#'))return;
    const sec=document.querySelector(href);
    if(!sec)return;
    const r=sec.getBoundingClientRect();
    a.classList.toggle('act',r.top<=120&&r.bottom>0);
  });
},{passive:true});
btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ── TESTIMONIALS CHECK ── */
(()=>{const container=document.getElementById('tstgContainer'),empty=document.getElementById('tstEmpty');if(container){const cards=container.querySelectorAll('.tstc');if(cards.length===0&&empty){container.style.display='none';empty.style.display='flex';}}})();

/* ── MOBILE MENU ── */
const bg=document.getElementById('burger'),mb=document.getElementById('mob');
function cm(){bg.classList.remove('o');mb.classList.remove('o');bg.setAttribute('aria-expanded','false');document.body.style.overflow='';}
bg.addEventListener('click',()=>{
  const o=!mb.classList.contains('o');
  bg.classList.toggle('o',o);mb.classList.toggle('o',o);
  bg.setAttribute('aria-expanded',String(o));
  document.body.style.overflow=o?'hidden':'';
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){cm();if(document.getElementById('lb').classList.contains('o')){closeLb();}}});

/* ── FLOOR INDICATOR ── */
(()=>{const dots=[...document.querySelectorAll('.sf')];let cur=2;setInterval(()=>{dots.forEach(d=>d.classList.remove('lit'));cur=(cur+1)%dots.length;dots[cur].classList.add('lit');},900);})();

/* ── REVEAL ── */
const ro=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');ro.unobserve(x.target);}}),{threshold:.09,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv,.rl,.rr').forEach((el,i)=>{el.style.transitionDelay=(i%5)*.08+'s';ro.observe(el);});

/* ── COUNT UP ── */
const co=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){
  const el=x.target,tgt=+el.dataset.count,sfx=el.dataset.sfx||'';
  let n=0;const step=Math.ceil(tgt/60);
  const iv=setInterval(()=>{n=Math.min(n+step,tgt);el.textContent=n+sfx;if(n>=tgt)clearInterval(iv);},28);
  co.unobserve(el);
}}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));

/* ── LIGHTBOX ── */
const lbData=[
  {ico:'fa-building',title:'Commercial Tower — Vijayawada',desc:'8-passenger MRL elevator installation in a 20-floor commercial tower. Energy-efficient VFD drive, stainless steel cabin, and automatic rescue device (ARD).'},
  {ico:'fa-home',title:'Luxury Villa Lift — Nellore',desc:'Custom 4-floor home lift with panoramic glass cabin, wooden flooring, LED cabin lighting, and frameless glass shaft designed to match the villa\'s premium interior.'},
  {ico:'fa-hospital',title:'Hospital Elevator — Guntur',desc:'Stretcher-compatible hospital elevator for a 6-floor multi-specialty hospital. Anti-microbial handrails, emergency lighting, and priority landing feature included.'},
  {ico:'fa-shopping-bag',title:'Shopping Mall — Tirupati',desc:'Panoramic glass elevator in a 4-floor shopping mall with 13-person capacity, LED ambient lighting and smooth 1.5 m/s operation.'},
  {ico:'fa-industry',title:'Warehouse Freight Lift — Ongole',desc:'Heavy-duty 2-tonne industrial freight elevator for a 3-floor warehouse. Bi-parting auto doors, anti-skid flooring, and overload protection system.'},
];
const lb=document.getElementById('lb');
function openLb(i){const d=lbData[i];document.getElementById('lbico').className='fas '+d.ico;document.getElementById('lbtitle').textContent=d.title;document.getElementById('lbdesc').textContent=d.desc;lb.classList.add('o');document.body.style.overflow='hidden';}
function closeLb(){lb.classList.remove('o');document.body.style.overflow='';}
document.getElementById('lbx').addEventListener('click',closeLb);
lb.addEventListener('click',e=>{if(e.target===lb)closeLb();});
document.querySelectorAll('.gli').forEach(el=>el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')el.click();}));

/* ── FAQ ── */
function tFaq(btn){const item=btn.closest('.fqi'),ans=item.querySelector('.fqa'),open=btn.classList.contains('o');document.querySelectorAll('.fqq.o').forEach(q=>{q.classList.remove('o');q.nextElementSibling.classList.remove('o');});if(!open){btn.classList.add('o');ans.classList.add('o');}}

/* ── CONTACT FORM (FINAL CLEAN VERSION) ── */

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwNckMm70q5WMx7Eov1aqPKt1R_3AbKNvqzqC6vYtezKCFhRaDYgJNRsS0_PmRTiOxw/exec";
const WHATSAPP_NUMBER = "918179492454"; 

let isSubmitting = false;

// Remove error on typing
document.querySelectorAll('.fgi,.fgs,.fgt').forEach(el =>
  el.addEventListener('input', () =>
    el.closest('.fg')?.classList.remove('err')
  )
);

document.getElementById('cfrm').addEventListener('submit', async function(e) {
  e.preventDefault();

  // 🪤 Honeypot (spam protection)
  const hp = document.getElementById('hp');
  if (hp && hp.value !== "") return;

  // ⏱️ Rate limit
  const lastSent = Number(localStorage.getItem('lastSent') || 0);
  if (Date.now() - lastSent < 15000) {
    showMsg('Please wait a few seconds before sending again.', 'no');
    return;
  }

  // 🔒 Prevent double submit
  if (isSubmitting) return;
  isSubmitting = true;

  const name = document.getElementById('fn').value.trim();
  const phone = document.getElementById('fp').value.trim();
  const email = document.getElementById('fe').value.trim();
  const city = document.getElementById('fc').value.trim();
  const service = document.getElementById('fsvc').value;
  const building = document.getElementById('fbt').value;
  const message = document.getElementById('fmsg').value.trim();

  let ok = true;

  // Validation
  if (name.length < 2) ok = false;
  if (!/^[6-9]\d{9}$/.test(phone)) ok = false;
  if (!service) ok = false;

  if (!ok) {
    showMsg('Please fill all required fields correctly.', 'no');
    isSubmitting = false;
    return;
  }

  const btn = document.getElementById('fsub');
  const txt = document.getElementById('fsubtxt');

  btn.disabled = true;
  txt.textContent = 'Sending...';

  const formData = { name, phone, email, city, service, building, message };

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "text/plain" }
    });

    const result = await res.json();

    if (result.status === "success") {

      this.reset();
      localStorage.setItem('lastSent', Date.now());

      const whatsappMsg =
`Hello, I submitted an enquiry:

Name: ${name}
Phone: ${phone}
Service: ${service}`;

      const whatsappLink =
`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

      showMsg(
        `✓ Thank you, ${name}! Your enquiry is submitted successfully.`,
        'ok',
        whatsappLink
      );

    } else {
      showMsg('❌ Failed to send. Try again.', 'no');
    }

  } catch (err) {
    showMsg('❌ Network error. Please try again.', 'no');
  }

  btn.disabled = false;
  txt.textContent = 'Send Enquiry';
  isSubmitting = false;
});


// ✅ Message + WhatsApp button
function showMsg(msg, cls, whatsappLink = "") {
  const el = document.getElementById('fmsgbox');

  el.innerHTML = msg;

  if (whatsappLink) {
    el.innerHTML += `
      <br><br>
      <a href="${whatsappLink}" target="_blank"
         style="display:inline-block;padding:10px 15px;background:#25D366;color:#fff;border-radius:5px;text-decoration:none;">
         Continue on WhatsApp →
      </a>
    `;
  }

  el.className = 'fmsg ' + cls;
  el.style.display = 'block';

  setTimeout(() => el.style.display = 'none', 10000);
}
/* ── COOKIE ── */
function closeCookie(){document.getElementById('cookie').style.transform='translateY(101%)';localStorage.setItem('be_ck','1');}
if(!localStorage.getItem('be_ck'))setTimeout(()=>document.getElementById('cookie').classList.add('show'),2500);

