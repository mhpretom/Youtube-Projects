


const increamentEl=document.querySelector(".btn1");
const decreamentEl=document.querySelector(".btn2");
const resetEl=document.querySelector(".btn3");
const countEl=document.querySelector(".count");



var count=0;

increamentEl.addEventListener("click",function(){
    count=count+1;
    countEl.innerText=count;
});
decreamentEl.addEventListener("click",function(){
    count=count-1;
    countEl.innerText=count;
})
resetEl.addEventListener("click",function(){
    count=0;
    countEl.innerText=count;
})