
// Detecting Button Press
var numOfButtons = document.querySelectorAll("button");
var i;

for (i = 0; i < numOfButtons.length; i++) {
  numOfButtons[i].addEventListener("click", function (){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    if (this.innerHTML === "a") {
    buttonAnimation1(buttonInnerHTML);
    }
    else if (this.innerHTML === "j") {
    buttonAnimation3(buttonInnerHTML);
    }
    else {
      buttonAnimation2(buttonInnerHTML);
    }
  } );
}

// Detecting Keyboard Press
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    buttonAnimation1(event.key);
    buttonAnimation2(event.key);
    buttonAnimation3(event.key);
});

function makeSound(key) {

  switch (key) {

    case "a":
      var kick = new Audio("sounds/fart.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/fart.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/fart.mp3");
      tom1.play();
      break;

    case "f":
      var tom2 = new Audio("sounds/fart.mp3");
      tom2.play();
      break;

    case "g":
      var tom3 = new Audio("sounds/fart.mp3");
      tom3.play();
      break;

    case "h":
      var tom4 = new Audio("sounds/fart.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/fart.mp3");
      crash.play();
      break;

    default:
  }
}

//Button Reaction
function buttonAnimation2(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
}

function buttonAnimation1(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed2");
  setTimeout(function() {activeButton.classList.remove("pressed2");}, 100);
}

function buttonAnimation3(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed3");
  setTimeout(function() {activeButton.classList.remove("pressed3");}, 100);
}
