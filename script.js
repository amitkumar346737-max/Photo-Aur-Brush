
const fileInput=document.getElementById("fileInput");
const before=document.getElementById("imgBefore");
const after=document.getElementById("imgAfter");
const slider=document.getElementById("slider");
const wrap=document.getElementById("beforeWrap");
const d1=document.getElementById("downloadOriginal");
const d2=document.getElementById("downloadEnhanced");

document.getElementById("btnUpload").onclick=()=>fileInput.click();

fileInput.onchange=e=>{
let file=e.target.files[0];
let url=URL.createObjectURL(file);
before.src=url;
after.src=url;
d1.href=url;
d2.href=url;
};

slider.oninput=e=>{
wrap.style.width=e.target.value+"%";
};
