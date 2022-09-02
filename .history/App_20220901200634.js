const player = prompt("Do you choose rock, paper or scissors?");

function computerPlay(computer) {
  computer = Math.random();

  if (computer < 0.34) {
    computer = "rock";
  } else if (computer <= 0.67) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  return computer;
}

computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection) {
    return "The result is a tie!";
  } 
  else if (computerSelection == "rock") {
    return (playerSelection.toLowerCase() == "scissors")?
    "rock wins, computer beat you":
    "paper wins you beat the computer, nice job!";
  } 
  else if (computerSelection == "paper") {
    return (playerSelection.toLowerCase() == "rock")?
    "paper wins, computer beat you!":
    "scissors wins you beat the computer, nice job!";
  } 
  else if (computerSelection == "scissors") {
    return (playerSelection.toLowerCase() == "paper")?
    "scissors wins, computer beat you!":
    "rock wins You beat the computer, nice job!";
  } 
  else {
    return "Please Try again or Check Your Spelling";
  }
}

const playerSelection = player;
const computerSelection = computerPlay();
console.log("Computer chooses: " + computerPlay());
console.log("player chooses: " + playerSelection.toLowerCase());
console.log(playRound(player.toLowerCase(), computerSelection));
