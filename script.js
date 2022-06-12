"use strict";

let player_0 = document.querySelector(".player--0");
let player_1 = document.querySelector(".player--1");
let player0_active = document.querySelector(".player--0");
let player1_active = document.querySelector(".player--1");

let current_0 = document.querySelector("#current--0");
let current_1 = document.querySelector("#current--1");

let score_0 = document.querySelector("#score--0");
let score_1 = document.querySelector("#score--1");

let dice = document.querySelector(".dice");

let roll_Button = document.querySelector(".btn--roll");
let hold_Button = document.querySelector(".btn--hold");
let new_Button = document.querySelector(".btn--new");

let playing = true;
let score_both = [0, 0];
let soma = 0;
let actualPlayer = 0;

dice.classList.add("hidden");

function printCurrent() {
  document.querySelector(`#current--${actualPlayer}`).textContent = soma;
}

function changePlayer() {
  soma = 0;
  printCurrent();
  actualPlayer = actualPlayer === 0 ? 1 : 0;
  player0_active.classList.toggle("player--active");
  player1_active.classList.toggle("player--active");
}

function playerWins() {
  document.querySelector("body").style.backgroundColor = "green";
  actualPlayer === 0
    ? (document.querySelector(".winner-text").textContent = actualPlayer + 1)
    : (document.querySelector(".winner-text").textContent = actualPlayer + 1);

  document.querySelector(".hidden-box").classList.toggle("hidden");
  document.querySelector(".dice").classList.toggle("hidden");
  playing = false;
}

function zerar() {
  soma = 0;
  score_both = [0, 0];
  actualPlayer = 0;
  document.querySelector(".hidden-box").classList.add("hidden");
  document.querySelector(".dice").classList.remove("hidden");
  document.querySelector("body").style.backgroundColor = "#bf2e34";
  score_0.textContent = "0";
  score_1.textContent = "0";
  playing = true;
}
roll_Button.addEventListener("click", function () {
  if (playing) {
    const randomNumber = parseInt(Math.random() * 6) + 1;
    dice.src = `Imagens/dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      dice.classList.remove("hidden");
      soma += randomNumber;
      printCurrent();
    } else {
      changePlayer();
    }
  }
});

hold_Button.addEventListener("click", function () {
  if (playing) {
    score_both[actualPlayer] += soma;
    if (score_both[actualPlayer] >= 100) {
      playerWins();
    }
    document.querySelector(`#score--${actualPlayer}`).textContent =
      score_both[actualPlayer];
    changePlayer();
  }
});

new_Button.addEventListener("click", function () {
  zerar();
});
