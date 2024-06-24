// generate random number round 1-6 integer
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// choose image that aligns with random number generated player 1
if (randomNumber1 === 1) {
  document.querySelector(".img1").src = "./images/dice1.png";
} else if (randomNumber1 === 2) {
  document.querySelector(".img1").src = "./images/dice2.png";
} else if (randomNumber1 === 3) {
  document.querySelector(".img1").src = "./images/dice3.png";
} else if (randomNumber1 === 4) {
  document.querySelector(".img1").src = "./images/dice4.png";
} else if (randomNumber1 === 5) {
  document.querySelector(".img1").src = "./images/dice5.png";
} else if (randomNumber1 === 6) {
  document.querySelector(".img1").src = "./images/dice6.png";
}
// choose image that aligns with random number generated player 2
if (randomNumber2 === 1) {
  document.querySelector(".img2").src = "./images/dice1.png";
} else if (randomNumber2 === 2) {
  document.querySelector(".img2").src = "./images/dice2.png";
} else if (randomNumber2 === 3) {
  document.querySelector(".img2").src = "./images/dice3.png";
} else if (randomNumber2 === 4) {
  document.querySelector(".img2").src = "./images/dice4.png";
} else if (randomNumber2 === 5) {
  document.querySelector(".img2").src = "./images/dice5.png";
} else if (randomNumber2 === 6) {
  document.querySelector(".img2").src = "./images/dice6.png";
}
// determine winner by comparing player 1 and player 2 number
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

// Update header with winner img
