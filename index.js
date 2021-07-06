function roll(){
    var player1 = Math.ceil(Math.random() * 6);
    var player2 = Math.ceil(Math.random() * 6);
    return [player1, player2];
}

function play(){
var rolls = roll();
if(rolls[0]===rolls[1]){
    document.querySelector("h1").innerHTML=" 🏳️  DRAW  🏳️ ";
    document.querySelector(".dice-player1-name h3 em").style.color="#FFEAC9";
    document.querySelector(".dice-player2-name h3 em").style.color="#FFEAC9";
}
else if (rolls[0]>rolls[1]){
    document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins";
    document.querySelector(".dice-player1-name h3 em").style.color="#66DE93";
    document.querySelector(".dice-player2-name h3 em").style.color="#D83A56";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins  🚩 ";
    document.querySelector(".dice-player2-name h3 em").style.color="#66DE93";
    document.querySelector(".dice-player1-name h3 em").style.color="#D83A56";
}
document.querySelector(".dice-player1 img").setAttribute("src", ("images/dice"+rolls[0]+".png"));
document.querySelector(".dice-player2 img").setAttribute("src", ("images/dice"+rolls[1]+".png"));
}
