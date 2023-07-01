// Create two variables to store choices, one for user and another for computer
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const comp_input = Math.floor(Math.random() * 3);
  return comp_input;
}

// Ask user input (rock, paper or scissors)
function getUserChoice() {
  const user_input =
    parseInt(prompt("Pick: (1)Rock  (2)Paper  (3)Scissors")) - 1;
  return user_input;
}

// Compare the two variables to determine the winner
function play(computerSelection, playerSelection) {
  let winner = "";
  console.log(computerSelection + " " + playerSelection);

  console.log(
    `Computer: ${choices[computerSelection]}\t User: ${choices[playerSelection]}`
  );

  if (computerSelection === 0 && playerSelection === 1) {
    winner = "User won!";
  } else if (computerSelection === 0 && playerSelection === 2) {
    winner = "Computer won!";
  } else if (computerSelection === 1 && playerSelection === 0) {
    winner = "Computer won!";
  } else if (computerSelection === 1 && playerSelection === 2) {
    winner = "User won!";
  } else if (computerSelection === 2 && playerSelection === 0) {
    winner = "User won!";
  } else if (computerSelection === 2 && playerSelection === 1) {
    winner = "Computer won!";
  } else {
    winner = "Draw!";
  }

  return winner;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const player = getUserChoice();
    const computer = getComputerChoice();
    console.log(play(computer, player));
  }
}

game();
