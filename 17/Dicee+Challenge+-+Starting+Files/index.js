// generate random number round 1-6 integer
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// choose image that aligns with random number generated player 1

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomImage1;
image1.setAttribute("src", randomImageSource1);

// choose image that aligns with random number generated player 2
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
image2.setAttribute("src", randomImageSource2);
// determine winner by comparing player 1 and player 2 number
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

// Update header with winner img
