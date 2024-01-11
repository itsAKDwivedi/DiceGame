let finalScore1 = 0;
let finalScore2 = 0;
document.querySelector("#play").addEventListener("click", function(){play(finalScore1, finalScore2)});
document.querySelector("#new").addEventListener("click", newGame);

function newGame(){
    window.location.reload();
}

function play(){

    let img1 = document.querySelector("#player1");
    let img2 = document.querySelector("#player2");
    let dice = document.querySelectorAll(".dice");

    dice[0].style.display = "block";
    dice[1].style.display = "block";

    let play1 = Math.floor(Math.random()*6) + 1;
    let play2 = Math.floor(Math.random()*6) + 1;

    if(play1 === 1) {   
        img1.setAttribute("src", "./images/1.png");
    }
    if(play2 === 1) {   
        img2.setAttribute("src", "./images/1.png");
    }
    
    if(play1 === 2) {   
        img1.setAttribute("src", "./images/2.png");
    }
    if(play2 === 2) {   
        img2.setAttribute("src", "./images/2.png");
    }
    
    if(play1 === 3) {   
        img1.setAttribute("src", "./images/3.png");
    }
    if(play2 === 3) {   
        img2.setAttribute("src", "./images/3.png");
    }
    
    if(play1 === 4) {   
        img1.setAttribute("src", "./images/4.png");
    }
    if(play2 === 4) {   
        img2.setAttribute("src", "./images/4.png");
    }
    
    if(play1 === 5) {   
        img1.setAttribute("src", "./images/5.png");
    }
    if(play2 === 5) {   
        img2.setAttribute("src", "./images/5.png");
    }
    
    if(play1 === 6) {   
        img1.setAttribute("src", "./images/6.png");
    }
    if(play2 === 6) {   
        img2.setAttribute("src", "./images/6.png");
    }

    finalScore1+=play1;
    finalScore2+=play2;
    updateScore(finalScore1, finalScore2);
}

function updateScore(){
    document.querySelector("#score1").innerText = finalScore1;
    document.querySelector("#score2").innerText = finalScore2;
    if(finalScore1>finalScore2){
        document.querySelector("h1").innerText = "Player 1 wins";
    }
    else if(finalScore1<finalScore2){
        document.querySelector("h1").innerText = "Player 2 wins";
    }
    else{
        document.querySelector("h1").innerText = "Game Tie";
    }
}
