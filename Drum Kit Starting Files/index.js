//create an array of all the button elements
var but = document.querySelectorAll("button");

//add functionality to all the buttons
for(var i=0;i<but.length;i++){
    //what to do when clicked
    but[i].addEventListener("click", function(){  //creates the method

    var buttonInnerHTML = this.innerHTML; //creates

    playSound(buttonInnerHTML);

  });
}
addEventListener("keypress",function(event){
    playSound(event.key);
  });

//make a funtion that will play the required sound
function playSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
    alert("Press a valid key.");
  }
}
