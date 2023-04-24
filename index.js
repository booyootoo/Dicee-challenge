var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

var winningText = "";

if(randomNumber1 === randomNumber2){
    winningText = "Draw!";
} else if(randomNumber1 > randomNumber2){
    winningText = "Player 1 Wins!";
} else {
    winningText = "Player 2 Wins!";
}

document.querySelector("h1").innerText = winningText;