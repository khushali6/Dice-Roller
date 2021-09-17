var arr=new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
var player1 = Math.floor(Math.random() * arr.length);
var player2 = Math.floor(Math.random() * arr.length);

document.querySelector(".img1").src=arr[player1];
document.querySelector(".img2").src=arr[player2];

if(player1>player2){
    document.querySelector("h2").textContent="🏆Player 1 Wins";
}
else if(player1<player2){
    document.querySelector("h2").textContent="🏆Player 2 Wins";
}
else{
    document.querySelector("h2").textContent="😞 Tie";
}