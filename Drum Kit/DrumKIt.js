


var numOfElements=document.querySelectorAll("button").length;

for(let i=0;i<numOfElements;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
         
        var buttonValue=this.innerText;

        switch(buttonValue){
            case "t":
                var ad=new Audio("crash.mp3");
                ad.play();
                break;
            case "u":
                var ad1=new Audio("kick-bass.mp3");
                ad1.play();
                break;
            case "v":
                var ad2=new Audio("snare.mp3");;
                ad2.play();
                break;
            case "w":
                var ad3=new Audio("tom-1.mp3");;
                ad3.play();
                break;
            case "x":
                var ad4=new Audio("tom-2.mp3");;
                ad4.play();
                break;
            case "y":
                var ad5=new Audio("tom-3.mp3");;
                ad5.play();
                break;
            case "z":
                var ad6=new Audio("tom-1.mp3");;
                ad6.play();
                break;
        }
    })
}