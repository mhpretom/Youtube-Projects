


const player1El=document.querySelector(".p1");
const player2El=document.querySelector(".p2");
const buttonEl=document.querySelector(".btn");
const messageEl=document.querySelector(".message");

buttonEl.addEventListener("click",function(){
    var n=Math.random();
    var randomNumber=Math.floor((n*6)+1);
    
    switch(randomNumber){
        case 1:
            player1El.setAttribute("src","dice4.png");
            player2El.setAttribute("src","dice2.png");
            messageEl.innerText="player 1 wins";
            break;
        case 2:
            player1El.setAttribute("src","dice3.png");
            player2El.setAttribute("src","dice5.png");
            messageEl.innerText="player 2 wins";
            break;
        case 3:
            player1El.setAttribute("src","dice6.png");
            player2El.setAttribute("src","dice1.png");
            messageEl.innerText="player 1 wins";
            break;
        case 4:
            player1El.setAttribute("src","dice4.png");
            player2El.setAttribute("src","dice4.png");
            messageEl.innerText="Draw";
            break;
        case 5:
            player1El.setAttribute("src","dice5.png");
            player2El.setAttribute("src","dice6.png");
            messageEl.innerText="player 2 wins";
            break;
        case 6:
            player1El.setAttribute("src","dice3.png");
            player2El.setAttribute("src","dice3.png");
            messageEl.innerText="Draw";
            break;
        default:
            messageEl.innerHTML="No one won";
    }
})