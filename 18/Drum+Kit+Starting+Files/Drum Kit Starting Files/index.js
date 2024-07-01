// document.querySelectorAll("button")[0].addEventListener("click", handleClick);

var audioArray = [
  "crash.mp3",
  "kick-bass.mp3",
  "snare.mp3",
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
];

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var clickContents = this;
    console.log(clickContents);
    var buttonInnerHtml = this.innerHTML;
    keyPressDetect(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  keyPressDetect(event.key);
  buttonAnimation(event.key);
});

function keyPressDetect(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/crash.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/kick-bass.mp3");
      tom3.play();

    case "l":
      var tom3 = new Audio("./sounds/snare.mp3");
      tom3.play();
    default:
      console.log(this.innerHTML);
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
