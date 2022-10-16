'use strict';

// Selecting elements
const newGameButton = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const player1Board = document.querySelector('.player--0');
const player2Board = document.querySelector('.player--1');
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.querySelector('#current--1');
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');

// define the initial scores for P1 and P2
let currentScoreP1 = 0;
let totalScoreP1 = 0;
let currentScoreP2 = 0;
let totalScoreP2 = 0;

// Roll the dice and add score to the Active player
rollDiceButton.addEventListener('click', () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  if (player1Board.classList.contains('player--active')) {
    if (dice === 1) {
      diceImage.src = `dice-${dice}.png`;
      player1Board.classList.remove('player--active');
      player2Board.classList.add('player--active');
      currentP1.textContent = 0;
    } else {
      diceImage.src = `dice-${dice}.png`;
      diceImage.classList.remove('hidden');
      currentScoreP1 += dice;
      currentP1.textContent = currentScoreP1;
    }
  } else if (player2Board.classList.contains('player--active')) {
    if (dice === 1) {
      diceImage.src = `dice-${dice}.png`;
      player1Board.classList.add('player--active');
      player2Board.classList.remove('player--active');
      currentP2.textContent = 0;
    } else {
      diceImage.src = `dice-${dice}.png`;
      currentScoreP2 += dice;
      currentP2.textContent = currentScoreP2;
    }
  }
});

// Hold the score and change player
holdButton.addEventListener('click', () => {
  if (player1Board.classList.contains('player--active')) {
    player1Board.classList.remove('player--active');
    player2Board.classList.add('player--active');
    totalScoreP1 += currentScoreP1;
    scoreP1.textContent = totalScoreP1;
    currentScoreP1 = 0;
    currentP1.textContent = 0;
  } else if (player2Board.classList.contains('player--active')) {
    player1Board.classList.add('player--active');
    player2Board.classList.remove('player--active');
    scoreP2.textContent += currentScoreP2;
    totalScoreP2 += currentScoreP2;
    scoreP2.textContent = totalScoreP2;
    currentScoreP2 = 0;
    currentP2.textContent = 0;
  }
});

// Reset the game
newGameButton.addEventListener('click', () => {
  diceImage.classList.add('hidden');
  player1Board.classList.add('player--active');
  player2Board.classList.remove('player--active');
  currentScoreP1 = 0;
  totalScoreP1 = 0;
  currentScoreP2 = 0;
  totalScoreP2 = 0;
  scoreP1.textContent = 0;
  currentP1.textContent = 0;
  scoreP2.textContent = 0;
  currentP2.textContent = 0;
});
