const dice1Element = document.querySelector(".img1");
const dice2Element = document.querySelector(".img2");
const titleText = document.querySelector(".text") 

let randomNum1 = Math.floor(Math.random()*6);
let randomNum2 = Math.floor(Math.random()*6);

let diceNum1 = randomNum1+1; 
let diceNum2 = randomNum2+1; 

console.log(diceNum1);

//for dice 1

if(diceNum1 === 1) {
    dice1Element.src="./images/dice1.png";
} else if(diceNum1 === 2) {
    dice1Element.src="./images/dice2.png";
} else if(diceNum1 === 3) {
    dice1Element.src="./images/dice3.png";
} else if(diceNum1 === 4) {
    dice1Element.src="./images/dice4.png";
} else if(diceNum1 === 5) {
    dice1Element.src="./images/dice5.png";
} else if(diceNum1 === 6) {
    dice1Element.src="./images/dice6.png";
} 


if(diceNum2 === 1) {
    dice2Element.src="./images/dice1.png";
} else if(diceNum2 === 2) {
    dice2Element.src="./images/dice2.png";
} else if(diceNum2 === 3) {
    dice2Element.src="./images/dice3.png";
} else if(diceNum2 === 4) {
    dice2Element.src="./images/dice4.png";
} else if(diceNum2 === 5) {
    dice2Element.src="./images/dice5.png";
} else if(diceNum2 === 6) {
    dice2Element.src="./images/dice6.png";
} 

if (diceNum1 > diceNum2) {
    titleText.textContent = "Player 1 Won!";
} else if (diceNum1 < diceNum2)  { 
    titleText.textContent = "Player 2 Won!";
} else {
    titleText.textContent = "Draw!"
}