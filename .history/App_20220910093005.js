let playerScore = parseInt(0);
let computerScore = parseInt(0);

let playerSelection = document.querySelectorAll(`[data-selection]`);

selectionButtons.forEach(selection)

function computerPlay(computerChoice) {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      return "rock wins. You beat the computer, nice job!";
    } else {
      computerScore++;
      return "paper wins. computer beat you.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "paper wins. You beat the computer, nice job!";
    } else {
      computerScore++;
      return "scissors wins. computer beat you.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "rock wins. computer beat you.";
    } else {
      playerScore++;
      return "scissors wins. You beat the computer, nice job!";
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    console.log("player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(" PLAYER = " + playerScore + " COMPUTER = " + computerScore);
  }
  console.log(
    "GAME OVER => " +
      " Your score = " +
      playerScore +
      " and the Computer's score = " +
      computerScore
  );
  if (playerScore > computerScore) {
    console.log("PLAYER WINS! COGRATULATIONS");
  } else if (playerScore < computerScore) {
    console.log("COMPUTER WINS! BETTER LUCK NEXT TIME");
  } else {
    console.log("DRAW! TRY AGAIN");
  }
}

game();
