const btn = document.querySelector(".btn");
const dots = document.querySelector(".dots");
const text = document.querySelector(".text");
btn.addEventListener("click", (e)=>
{
   if(e.target.innerHTML=="Read More")
   {
    dots.style.display="none";
    text.style.display="inline";
    e.target.innerHTML="Read Less"
   }
   else{
    dots.style.display="inline";
    text.style.display="none";
    e.target.innerHTML="Read More"
   }
})