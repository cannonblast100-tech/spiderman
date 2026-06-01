const form =
document.getElementById("crimeForm");

const popup =
document.getElementById("popup");

const closeBtn =
document.getElementById("closeBtn");

form.addEventListener("submit",(e)=>{

e.preventDefault();

popup.style.display = "flex";

form.reset();

});

closeBtn.addEventListener("click",()=>{

popup.style.display = "none";

});

window.addEventListener("click",(e)=>{

if(e.target === popup){

popup.style.display = "none";

}

});