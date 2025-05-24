/****Writing the logic to get the computer choice ****/
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/****Writing the logic to get the human choice ****/
function getHumanChoice() {
  let humanInput = prompt("Choose any one of the following: rock, paper, scissors").toLowerCase(); // Convert to lowercase for consistent comparison

  // Optional: Add input validation
  while (!["rock", "paper", "scissors"].includes(humanInput)) {
    humanInput = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
  }
  return humanInput;
}

/**Declaring the players score variables */
const humanScore = 0
const computerScore = 0


/**Writing the logic to play a single round */
function playRound() {
  // *** Calling the functions to get the actual choices ***
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  console.log("Computer chose:", computerChoice);
  console.log("You chose:", humanChoice);

  // Checking for a draw first
  if (computerChoice === humanChoice) {
    return "It's a draw!";
  }

  // Checking for computer win conditions
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    return "Computer Wins!";
  }

  return "Human Wins!";
}

// *** Call the outcome function to start the game and see the result
console.log(playRound());

/*Writing the logic to play the entire game*/
function playGame() {

}

/*
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/