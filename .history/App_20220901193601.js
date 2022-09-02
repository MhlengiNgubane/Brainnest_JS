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
  else if (computerSelection === "rock") {
    return (playerSelection.toLowerCase() === "scissors")?
    "rock wins computer beat you":
    "paper wins you beat the computer, nice job!";
  } 
  else if (computerSelection === "paper") {
    return (playerSelection.toLowerCase() === "rock")?
    "paper wins You beat the computer, nice job!":
       "scissors wins" + " " + " computer beat you.";
  } 
  else if (computerSelection === "scissors") {
    if (playerSelection.toLowerCase() === "rock") {
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
