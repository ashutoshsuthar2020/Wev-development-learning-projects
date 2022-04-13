function dice1(n){
  var imgLoc = "./images/dice"+n+".png"
  document.lastElementChild.lastElementChild.querySelectorAll(".dice")[0].querySelector(".img1").setAttribute("src",imgLoc);
}
function dice2(n){
  var imgLoc = "./images/dice"+n+".png"
  document.lastElementChild.lastElementChild.querySelectorAll(".dice")[1].querySelector(".img2").setAttribute("src",imgLoc);
}
var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;
dice1(player1);
dice2(player2);
