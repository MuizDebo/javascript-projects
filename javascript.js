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
let humanScore = 0
let computerScore = 0
let tieNumber = 0


/**Writing the logic to play a single round */
function playRound() {
  // *** Calling the functions to get the actual choices ***
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  console.log("--- New Round ---");
  console.log("Computer chose:", computerChoice);
  console.log("You chose:", humanChoice);

  // Checking for a draw first
  if (computerChoice === humanChoice) {
    tieNumber++
    return "It's a draw!";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    return "Computer Wins!";
  } else
  humanScore++;
  return "Human Wins!";
}

/*Writing the logic to play the entire game*/
function playGame(numberOfRounds) {
  for (let i = 0; i < numberOfRounds; i++) {
    const roundResult = playRound(); 
    console.log(`Round ${i + 1} Result: ${roundResult}`);
    console.log(`Current Score: Human ${humanScore} | Computer ${computerScore} | Ties ${tieNumber}`);
  }
}
  // Announce final results after all rounds are played
  console.log("\n--- Final Game Results ---");
  console.log("Your Total Score: " + humanScore);
  console.log("Computer's Total Score: " + computerScore);
  console.log("Tied games: " + tieNumber);


let rounds = parseInt(prompt("How many rounds do you want to play?"));
playGame(rounds);