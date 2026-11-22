/* EDIT HERE: WhatsApp number (digits with country code) */
const WA="919353009622",ADDR="6, 7th Main Rd, opposite MSR Boys Home, M S Ramaiah Nagar, Mathikere, Bengaluru 560054";
const $=s=>document.querySelector(s),R=matchMedia("(prefers-reduced-motion:reduce)").matches;
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const TRUCK="truck.webp";document.querySelectorAll("[data-truck]").forEach(i=>i.src=TRUCK);
$("#yr").textContent=new Date().getFullYear();
["waHero","waVisit","waFab"].forEach(i=>$("#"+i).href=wa("Hi Ruchi Ranga, I’d like to place an order."));
$("#waCater").href=wa("Hi Ruchi Ranga, I’d like to enquire about catering for an event.");
$("#dir").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Ruchi Ranga, "+ADDR);
const one="<span>Chicken Biryani</span><span>✦</span><span>Khushka Rice</span><span>✦</span><span>Chicken Combos</span><span>✦</span><span>Street Food</span><span>✦</span>";
$("#trk").innerHTML=one.repeat(4);
const m=$("#menu"),nav=$("#nav");m.onclick=()=>m.setAttribute("aria-expanded",nav.classList.toggle("open"));
nav.onclick=e=>{if(e.target.tagName==="A"){nav.classList.remove("open");m.setAttribute("aria-expanded",false)}};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".rv,.card,.fact").forEach(el=>{el.classList.add("rv");io.observe(el)});
const t=$("#toTop");addEventListener("scroll",()=>t.classList.toggle("show",scrollY>600),{passive:true});
t.onclick=()=>scrollTo({top:0,behavior:R?"auto":"smooth"});
/* embers */
const c=$("#embers"),x=c.getContext("2d");let W,H;const cols=["#ffd36e","#f7b32b","#ff6a3d","#d7261e"],ps=[];
const rs=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight};rs();addEventListener("resize",rs);
for(let i=0;i<(innerWidth<700?24:48);i++)ps.push({x:Math.random()*W,y:Math.random()*H,r:1+Math.random()*2.6,s:.3+Math.random()*1,a:Math.random()*6,c:cols[i%4]});
let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(c);
const tick=()=>{if(vis){x.clearRect(0,0,W,H);ps.forEach(p=>{p.y-=p.s;p.a+=.03;p.x+=Math.sin(p.a)*.5;if(p.y<-10){p.y=H+10;p.x=Math.random()*W}x.globalAlpha=.7;x.fillStyle=p.c;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()})}requestAnimationFrame(tick)};
if(!R)tick();

(()=>{
const rd=document.getElementById("road");
const on=()=>{const m=document.documentElement.scrollHeight-innerHeight,p=m>0?scrollY/m:0;rd.style.setProperty("--p",p*100+"%");rd.style.setProperty("--l","calc("+p*100+"% - "+p*36+"px)")};
addEventListener("scroll",on,{passive:true});on();
if(!R){const h=document.querySelector(".hero"),fl=[...document.querySelectorAll(".fl")];
h.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const r=h.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;fl.forEach(f=>{const d=+f.dataset.d;f.style.setProperty("--mx",dx*d+"px");f.style.setProperty("--my",dy*d+"px")})});
document.querySelectorAll(".card").forEach(k=>{k.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const r=k.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;k.style.transition="transform .1s";k.style.transform="perspective(800px) rotateY("+dx*9+"deg) rotateX("+(-dy*9)+"deg) translateY(-6px)"});k.addEventListener("pointerleave",()=>{k.style.transition="transform .6s";k.style.transform=""})});
const wm=document.querySelector(".wm");addEventListener("scroll",()=>{wm.style.translate="calc(-50% + "+((scrollY%2000)*-.05)+"px) -50%"},{passive:true})}
const co=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;co.unobserve(en.target);const el=en.target,n=+el.dataset.n,d=+(el.dataset.d||0);if(R){el.textContent=n.toFixed(d);return}const t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/1400),e=1-Math.pow(1-k,3);el.textContent=(n*e).toFixed(d);if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
document.querySelectorAll(".cnt").forEach(c=>co.observe(c));
})();
