
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".faqItem button").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faqItem");
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faqItem.open").forEach(el => el.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
    btn.querySelector("span:last-child").textContent = item.classList.contains("open") ? "–" : "+";
  });
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, {threshold:.1});
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

function stars(canvas, count, maxAlpha) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let items = [];
  function resize(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, r.width*dpr);
    canvas.height = Math.max(1, r.height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    items = Array.from({length:count},()=>({
      x:Math.random()*r.width,y:Math.random()*r.height,
      r:Math.random()*1.2+.2,a:Math.random()*maxAlpha+.08,
      v:Math.random()*.006+.002,p:Math.random()*Math.PI*2
    }));
  }
  function draw(t){
    const r=canvas.getBoundingClientRect();
    ctx.clearRect(0,0,r.width,r.height);
    items.forEach(s=>{
      const a=s.a*(.6+.4*Math.sin(t*s.v+s.p));
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(120,195,235,${a})`;ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize();window.addEventListener("resize",resize);requestAnimationFrame(draw);
}
stars(document.getElementById("ambientStars"),90,.34);
stars(document.getElementById("heroStars"),48,.5);

const leafHost = document.getElementById("autumnFall");
const leaves = ["🍂","🍁","🍂"];
function spawnLeaf(){
  if (!leafHost || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el=document.createElement("span");
  el.className="autumnLeaf";
  el.textContent=leaves[Math.floor(Math.random()*leaves.length)];
  const x=Math.random()*100, size=12+Math.random()*10, duration=11+Math.random()*9;
  const sway=(Math.random()*100-50)+"px", drift=(Math.random()*150-75)+"px";
  const spin=(Math.random()*540+240)*(Math.random()<.5?-1:1);
  el.style.left=x+"vw"; el.style.fontSize=size+"px";
  el.style.setProperty("--duration",duration+"s");
  el.style.setProperty("--opacity",(0.18+Math.random()*.28).toFixed(2));
  el.style.setProperty("--sway",sway);
  el.style.setProperty("--drift",drift);
  el.style.setProperty("--spin-half",(spin*.45)+"deg");
  el.style.setProperty("--spin",spin+"deg");
  leafHost.appendChild(el);
  setTimeout(()=>el.remove(),(duration+1)*1000);
}
setInterval(spawnLeaf,1800);
setTimeout(spawnLeaf,500);
