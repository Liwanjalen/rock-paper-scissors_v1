// Create two variables to store choices, one for user and another for computer
const choices = ["rock", "paper", "scissor"];
const comp_input = Math.floor(Math.random() * 3);
let user_input = 0;
// Ask user input (rock, paper or scissors)
user_input = parseInt(prompt("Pick: (1)Rock  (2)Paper  (3)Scissors")) - 1;
//Print their choices
console.log(`Computer: ${choices[comp_input]}\t User: ${choices[user_input]}`);
// Compare the two variables to determine the winner & Print the winner in the console
if (comp_input === 1 && user_input === 2) {
  console.log("User won!");
} else if (comp_input === 1 && user_input === 3) {
  console.log("Computer won!");
} else if (comp_input === 2 && user_input === 1) {
  console.log("Computer won!");
} else if (comp_input === 2 && user_input === 3) {
  console.log("User won!");
} else if (comp_input === 3 && user_input === 1) {
  console.log("User won!");
} else if (comp_input === 3 && user_input === 2) {
  console.log("Computer won!");
} else {
  console.log("Draw!");
}
