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

  console.log(winner);

  return winner;
}

// const buttons = document.querySelectorAll(".playerChoice");

// buttons.forEach((button) => {
//   const player = button.id;
//   const computer = getComputerChoice();
//   button.addEventListener("click", function () {
//     alert("running");
//   });
//   console.log(button);
// });
function startGame(e) {
  const player = e.target.id;
  if (!player) return;
  const computer = getComputerChoice();
  play(computer, player);
}

window.addEventListener("click", startGame);
