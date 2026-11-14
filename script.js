const toggle=document.getElementById("menuToggle");const nav=document.getElementById("nav");
if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));}
const progress=document.getElementById("progress");
const updateProgress=()=>{if(!progress)return;const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+"%";};
window.addEventListener("scroll",updateProgress,{passive:true});updateProgress();
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
