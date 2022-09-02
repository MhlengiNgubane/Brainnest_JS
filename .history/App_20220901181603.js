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
  if (playerSelection.toLowerCase() === computerSelection) {
    return "The result is a tie!";
  } 
  else if (playerSelection.toLowerCase() === "rock") {
    return (computerSelection === "pa")? ""
  } 
  else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      return "paper wins" + " " + "You beat the computer, nice job!";
    } else {
      return "scissors wins" + " " + " computer beat you.";
    }
  } 
  else if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      return "rock wins" + " " + " computer beat you.";
    } else {
      return "scissors win" + " " + "You beat the computer, nice job!";
    }
  } 
  else {
    return "Please Try again or Check Your Spelling";
  }
}

const playerSelection = player;
const computerSelection = computerPlay();
console.log("player chooses: " + playerSelection.toLowerCase());
console.log("Computer chooses: " + computerPlay());
console.log(playRound(player.toLowerCase(), computerSelection));
