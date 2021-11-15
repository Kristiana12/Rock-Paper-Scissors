"use strict";

const instructions = document.querySelector(".header__rules");
const instructionsList = document.querySelector(".header__instructions");

const startBtn = document.getElementById("button");
const middleText = document.getElementById("middle-text");
const arrowImg = document.querySelector("#middle-text img");
const reset = document.querySelector(".reset");

const playerCards = document.querySelectorAll(".player-card");
const playerCardOnDeck1 = document.querySelector(".player-card-1 img");
const playerCardOnDeck2 = document.querySelector(".player-card-2 img");
const playerCardOnDeck3 = document.querySelector(".player-card-3 img");
const playerCardOnDeck4 = document.querySelector(".player-card-4 img");

const opponentCards = document.querySelectorAll(".opponent-card");
const opponentCardIcons = document.querySelectorAll(".opponent-card img");

const randomNumberPlayer1 = Math.floor(Math.random() * 3);
const randomNumberPlayer2 = Math.floor(Math.random() * 3);
const randomNumberPlayer3 = Math.floor(Math.random() * 3);
const randomNumberComputer1 = Math.floor(Math.random() * 3);
const randomNumberComputer2 = Math.floor(Math.random() * 3);
const randomNumberComputer3 = Math.floor(Math.random() * 3);

let isPlaying = true;
let numberOfCardsLeft = 3;

FIXME;
// const cardsLeftToPlay = () => {
//   numberOfCardsLeft--;
//   if (numberOfCardsLeft === 0) isPlaying = false;

//   if (!isPlaying) {
//     reset.style.display = "block";
//     middleText.style.display = "none";
//   }
// };

//Show Instructions
instructions.onclick = function () {
  instructionsList.style.display = "block";
};

instructionsList.onclick = function () {
  instructionsList.style.display = "none";
};

//Get Player Icons
const getPlayerRandomIcon = () => {
  playerCardOnDeck2.setAttribute(
    "src",
    `images/icon-${randomNumberPlayer1}.svg`
  );
  playerCardOnDeck3.setAttribute(
    "src",
    `images/icon-${randomNumberPlayer2}.svg`
  );
  playerCardOnDeck4.setAttribute(
    "src",
    `images/icon-${randomNumberPlayer3}.svg`
  );
};

FIXME;
//Reset Button
// const resetGame = () => {
//   reset.style.display = "none";
//   middleText.style.display = "block";
//   middleText.textContent = "Pick a card to play!";
//   middleText.style.color = "#ffcd1e";

//   // Show Player cards
//   for (let i = 1; i < playerCards.length; i++) {
//     playerCards[i].style.visibility = "visible";
//   }
//   playerCards[0].style.visibility = "hidden";
//   playerCardOnDeck1.style.display = "none";

//   //Show Opponent cards
//   for (let i = 0; i < 3; i++) {
//     opponentCards[i].style.visibility = "visible";
//   }
//   opponentCards[3].style.visibility = "hidden";
//   opponentCardIcons[3].style.display = "none";

//   getPlayerRandomIcon();
// };

const pickACard = (number1, number2) => {
  //Hide selected player card and one opponent card.
  playerCards[number1].style.visibility = "hidden";
  opponentCards[number2].style.visibility = "hidden";

  //Show the Opponent played card
  opponentCards[3].style.visibility = "visible";
  opponentCardIcons[3].style.visibility = "visible";
  //Show the Selected Card you picked to play
  playerCards[0].style.visibility = "visible";
  playerCardOnDeck1.style.visibility = "visible";

  arrowImg.style.visibility = "hidden";
};

const checkWinner = (playerNum, computerNum) => {
  if (playerNum === computerNum) {
    middleText.textContent = "There is a draw!";
    middleText.style.color = "#ab5cdb";
  } else if (
    (computerNum === 0 && playerNum === 2) ||
    (computerNum === 1 && playerNum === 0) ||
    (computerNum === 2 && playerNum === 1)
  ) {
    middleText.textContent = "Sorry, you lost!";
    middleText.style.color = "#ab5cdb";
  } else {
    middleText.textContent = "Yay, you won!";
    middleText.style.color = "#ffcd1e";
  }
  // setTimeout(cardsLeftToPlay, 2000);
};

const pickACard2 = () => {
  //Chooses the icons on played cards
  playerCardOnDeck1.setAttribute(
    "src",
    `images/icon-${randomNumberPlayer1}.svg`
  );

  opponentCardIcons[3].setAttribute(
    "src",
    `images/icon-${randomNumberComputer1}.svg`
  );
  //Shows the cards that are played and hides.
  pickACard(1, 1);
  checkWinner(randomNumberPlayer1, randomNumberComputer1);
};

//Hides the Selected card and chooses the icon on the selected card
const pickACard3 = () => {
  playerCardOnDeck1.setAttribute(
    "src",
    `images/icon-${randomNumberPlayer2}.svg`
  );

  opponentCards[3].style.visibility = "visible";
  opponentCardIcons[3].style.visibility = "visible";

  opponentCardIcons[3].setAttribute(
    "src",
    `images/icon-${randomNumberComputer2}.svg`
  );

  pickACard(2, 2);
  checkWinner(randomNumberPlayer2, randomNumberComputer2);
};

//Hides the Selected card and chooses the icon on the selected card
const pickACard4 = () => {
  playerCardOnDeck1.setAttribute(
    "src",
    `images/icon-${randomNumberPlayer3}.svg`
  );

  opponentCardIcons[3].setAttribute(
    "src",
    `images/icon-${randomNumberComputer3}.svg`
  );
  pickACard(3, 0);
  checkWinner(randomNumberPlayer3, randomNumberComputer3);
};

//Start Button
const startGame = () => {
  startBtn.style.display = "none";
  middleText.style.display = "block";
  opponentCards[3].style.display = "block";

  //Show player cards
  for (let i = 0; i < playerCards.length; i++) {
    playerCards[i].style.display = "block";
  }

  //Hide Icons from Opponent
  for (let i = 0; i < 3; i++) {
    opponentCardIcons[i].style.display = "none";
  }
  getPlayerRandomIcon();
};

startBtn.addEventListener("click", startGame);
playerCards[1].addEventListener("click", pickACard2);
playerCards[2].addEventListener("click", pickACard3);
playerCards[3].addEventListener("click", pickACard4);
TODO;
//reset.addEventListener("click", resetGame);
