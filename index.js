// Create two variables to store choices, one for user and another for computer
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const comp_input = Math.floor(Math.random() * 3);
  return choices[comp_input];
}

// Compare the two variables to determine the winner
function play(computerSelection, playerSelection) {
  let winner = "";

  console.log(computerSelection + " " + playerSelection);

  if (computerSelection === "rock" && playerSelection === "paper") {
    winner = "User won!";
  } else if (computerSelection === "rock" && playerSelection === "scissor") {
    winner = "Computer won!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winner = "Computer won!";
  } else if (computerSelection === "paper" && playerSelection === "scissor") {
    winner = "User won!";
  } else if (computerSelection === "scissor" && playerSelection === "rock") {
    winner = "User won!";
  } else if (computerSelection === "scissor" && playerSelection === "paper") {
    winner = "Computer won!";
  } else {
    winner = "Draw!";
  }

  return winner;
}

let score_computer = 0;
let score_player = 0;

function startGame(e) {
  const player = e.target.id;
  if (!player) return;
  const computer = getComputerChoice();
  const winner = play(computer, player);
  if (winner === "Draw!") {
    null;
  } else if (winner === "Computer won!") {
    score_computer += 1;
  } else if (winner === "User won!") {
    score_player += 1;
  }
  score.textContent = `Computer: ${score_computer}\tUser: ${score_player}`;
  display.appendChild(score);
  if (score_computer === 5) {
    finalWinner.textContent = "Computer won!";
    display.appendChild(finalWinner);
    score_computer = 0;
    score_player = 0;
  } else if (score_player === 5) {
    finalWinner.textContent = "User won!";
    display.appendChild(finalWinner);
    score_computer = 0;
    score_player = 0;
  }
}

const display = document.querySelector("#scoreboard");

const score = document.createElement("h3");

const finalWinner = document.createElement("h2");

window.addEventListener("click", startGame);
