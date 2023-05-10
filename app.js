'use strict';

const instructions = document.querySelector('.header__rules');
const instructionsList = document.querySelector('.header__instructions');

const startBtn = document.getElementById('button');
const middleText = document.getElementById('middle-text');
const arrowImg = document.querySelector('#middle-text img');
const reset = document.querySelector('.reset');

const playerCards = document.querySelectorAll('.player-card');
const playerCardImg = document.querySelectorAll('.player-card img');

const opponentCards = document.querySelectorAll('.opponent-card');
const opponentCardIcons = document.querySelectorAll('.opponent-card img');

let isPlaying = true;
let numberOfCardsLeft = 3;
let randomNumber = [];

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 3);
};

//Show Instructions
instructions.onclick = function () {
  instructionsList.style.display = 'block';
};

instructionsList.onclick = function () {
  instructionsList.style.display = 'none';
};

//Get Player Icons
const getRandomIcons = () => {
  for (let counter = 0; counter < 6; counter++) {
    randomNumber.push(generateRandomNumber());
  }

  playerCardImg[1].setAttribute('src', `images/icon-${randomNumber[0]}.svg`);
  playerCardImg[2].setAttribute('src', `images/icon-${randomNumber[1]}.svg`);
  playerCardImg[3].setAttribute('src', `images/icon-${randomNumber[2]}.svg`);
};

//Reset Button
const resetGame = () => {
  reset.style.display = 'none';
  middleText.style.display = 'block';
  middleText.textContent = 'Pick a card to play!';
  middleText.style.color = '#ffcd1e';

  // Show Player cards
  for (let i = 1; i < playerCards.length; i++) {
    playerCards[i].style.visibility = 'visible';
  }
  playerCards[0].style.visibility = 'hidden';
  playerCardImg[0].style.visibility = 'hidden';

  //Show Opponent cards
  for (let i = 0; i < 3; i++) {
    opponentCards[i].style.visibility = 'visible';
  }
  opponentCards[3].style.visibility = 'hidden';
  opponentCardIcons[3].style.visibility = 'hidden';

  isPlaying = true;
  numberOfCardsLeft = 3;
  randomNumber = [];
  getRandomIcons();
};

//Checks if there are still cards to play
const cardsLeftToPlay = () => {
  numberOfCardsLeft--;
  if (numberOfCardsLeft === 0) isPlaying = false;

  if (!isPlaying) {
    reset.style.display = 'block';
    middleText.style.display = 'none';
  }
};

const checkWinner = (playerNum, computerNum) => {
  if (playerNum === computerNum) {
    middleText.textContent = 'There is a draw!';
    middleText.style.color = '#ab5cdb';
  } else if (
    (computerNum === 0 && playerNum === 2) ||
    (computerNum === 1 && playerNum === 0) ||
    (computerNum === 2 && playerNum === 1)
  ) {
    middleText.textContent = 'Sorry, you lost!';
    middleText.style.color = '#ab5cdb';
  } else {
    middleText.textContent = 'Yay, you won!';
    middleText.style.color = '#ffcd1e';
  }

  //Show Reset Button 2s after the game ends
  setTimeout(cardsLeftToPlay, 2000);
};

const pickACard = (number1, number2) => {
  //Hide selected player card and one opponent card.
  playerCards[number1].style.visibility = 'hidden';
  opponentCards[number2].style.visibility = 'hidden';

  //Show the Opponent played card
  opponentCards[3].style.visibility = 'visible';
  opponentCardIcons[3].style.visibility = 'visible';
  //Show the Selected Card you picked to play
  playerCards[0].style.visibility = 'visible';
  playerCardImg[0].style.visibility = 'visible';

  arrowImg.style.visibility = 'hidden';
};

const pickACard2 = () => {
  //Chooses the icons on played cards
  playerCardImg[0].setAttribute('src', `images/icon-${randomNumber[0]}.svg`);
  opponentCardIcons[3].setAttribute(
    'src',
    `images/icon-${randomNumber[3]}.svg`
  );
  //Hides the Selected card and chooses the icon on the selected card
  pickACard(1, 1);
  checkWinner(randomNumber[0], randomNumber[3]);
};

//Hides the Selected card and chooses the icon on the selected card
const pickACard3 = () => {
  //Chooses the icons on played cards
  playerCardImg[0].setAttribute('src', `images/icon-${randomNumber[1]}.svg`);
  opponentCardIcons[3].setAttribute(
    'src',
    `images/icon-${randomNumber[4]}.svg`
  );
  //Hides the Selected card and chooses the icon on the selected card
  pickACard(2, 2);
  checkWinner(randomNumber[1], randomNumber[4]);
};

//Hides the Selected card and chooses the icon on the selected card
const pickACard4 = () => {
  //Chooses the icons on played cards
  playerCardImg[0].setAttribute('src', `images/icon-${randomNumber[2]}.svg`);
  opponentCardIcons[3].setAttribute(
    'src',
    `images/icon-${randomNumber[5]}.svg`
  );

  //Hides the Selected card and chooses the icon on the selected card
  pickACard(3, 0);
  checkWinner(randomNumber[2], randomNumber[5]);
};

//Start Button
const startGame = () => {
  startBtn.style.display = 'none';
  middleText.style.display = 'block';
  opponentCards[3].style.display = 'block';

  //Show player cards
  for (let i = 0; i < playerCards.length; i++) {
    playerCards[i].style.display = 'block';
  }

  //Hide Icons from Opponent
  for (let i = 0; i < 3; i++) {
    opponentCardIcons[i].style.display = 'none';
  }
  getRandomIcons();
};

startBtn.addEventListener('click', startGame);
playerCards[1].addEventListener('click', pickACard2);
playerCards[2].addEventListener('click', pickACard3);
playerCards[3].addEventListener('click', pickACard4);
reset.addEventListener('click', resetGame);
