

const buttonEl=document.querySelector(".btn");
const lightEl=document.querySelector(".light");

buttonEl.addEventListener("click",function(){
    
    if(buttonEl.innerText === "OFF")
    {
        lightEl.setAttribute("src","pic_bulbon.gif");
        buttonEl.innerText="ON";
    }

    else{
        lightEl.setAttribute("src","lightbulboff.png");
        buttonEl.innerText="OFF";
    }
})