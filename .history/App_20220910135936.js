let playerScore = 0;
let computerScore = 0;

const playMatch = () => {
  const options = document.querySelectorAll(".options button");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  const hands = document.querySelectorAll(".hands img");

  hands.forEach(hand => {
    hand.addEventListener("animationend", function() {
      this.style.animation = "";
    });
  });
  //Computer Options
  const computerOptions = ["rock", "paper", "scissors"];

  options.forEach(option => {
    option.addEventListener("click", function() {
      //Computer Choice
      const computerNumber = Math.floor(Math.random() * 3);
      const computerSelection = computerOptions[computerNumber];

      setTimeout(() => {
        //Here is where we call compare hands
        compareHands(this.textContent, computerSelection);
        //Update Images
        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerSelection}.png`;
      }, 2000);
      //Animation
      playerHand.style.animation = "shakePlayer 2s ease";
      computerHand.style.animation = "shakeComputer 2s ease";
    });
  });
};

const updateScore = () => {
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = playerScore;
  computerScore.textContent = computerScore;
};

function playRound(playerSelection, computerSelection) {
  const winner = document.querySelector(".winner");
  if (playerSelection === computerSelection) {
    winner.textContent = "It's a tie!";
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
