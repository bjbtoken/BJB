
function copyText(id){const el=document.getElementById(id);if(!el)return;const t=el.textContent.trim();navigator.clipboard.writeText(t).then(()=>{const b=document.getElementById('copied');if(b){b.style.opacity=1;setTimeout(()=>b.style.opacity=0,1200);}});}
