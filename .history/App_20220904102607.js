let playerScore = parseInt(0);
let computerScore = parseInt(0);

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



function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Do you choose rock, paper or scissors?");
    let playerSelection = playerChoice.toLowerCase();
    
    
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
