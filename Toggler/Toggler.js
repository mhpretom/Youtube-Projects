


var toggleEl=document.querySelector(".toggle-container");
var circleEl=document.querySelector(".circle");
var bodyEl=document.querySelector("body");

toggleEl.addEventListener("click",function(){
    
   if(circleEl.style.marginLeft === "0px")
   {
    circleEl.style.marginLeft="40px";
    toggleEl.style.backgroundColor="blue";
    bodyEl.style.color="white";
    bodyEl.style.backgroundColor="black";
   }
   else{
    circleEl.style.marginLeft="0px";
    toggleEl.style.backgroundColor="grey";
    bodyEl.style.color="black";
    bodyEl.style.backgroundColor="white";
   }
})