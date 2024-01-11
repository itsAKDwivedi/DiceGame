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

    let result1 = "./images/"+play1+".png";
    let result2 = "./images/"+play2+".png";

    img1.setAttribute("src", result1);
    img2.setAttribute("src", result2);

    finalScore1+=play1;
    finalScore2+=play2;
    updateScore(finalScore1, finalScore2);
}

function updateScore(){
    document.querySelector("#score1").innerText = finalScore1;
    document.querySelector("#score2").innerText = finalScore2;
    if(finalScore1>finalScore2){
        document.querySelector("h1").innerText = "Player 1 wins";
        document.querySelector(".c1").style.display = "inline";
        document.querySelector(".c2").style.display = "none";
    }
    else if(finalScore1<finalScore2){
        document.querySelector("h1").innerText = "Player 2 wins";
        document.querySelector(".c1").style.display = "none";
        document.querySelector(".c2").style.display = "inline";
    }
    else{
        document.querySelector("h1").innerText = "Game Tie";
        document.querySelector(".c1").style.display = "none";
        document.querySelector(".c2").style.display = "none";
    }
}
