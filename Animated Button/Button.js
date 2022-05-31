



const buttonEl=document.querySelector(".btn");

buttonEl.addEventListener("click",function(){
    buttonEl.classList.add("animate");
    setInterval(()=>{
        buttonEl.classList.remove("animate");
    },100)
})