function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log("Computer chose: " ,getComputerChoice());

function getHumanChoice() {
  const choices = prompt("Choose any one of the following: rock, paper, scissors");
  return choices;
}

console.log("You chose: " ,getHumanChoice());


/*
function computerWin() {
if ((getComputerChoice === "rock" && getHumanChoice === "scissors") || 
    (getComputerChoice === "paper" && getHumanChoice === "rock") || 
    (getComputerChoice === "scissors" && getHumanChoice === "paper")) {
    return "Computer Wins"
  } else if (getComputerChoice === getHumanChoice) {
    return "It is a draw"
  } 
  else {
    return "Human Wins"
  }
}


console.log(computerWin());


const humanScore = 0
const computerScore = 0

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "draw"
  } else if (humanChoice ===)
  // your code here!
}


playRound(humanSelection, computerSelection); */
