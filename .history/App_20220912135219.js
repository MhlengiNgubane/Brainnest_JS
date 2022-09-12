
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
        playRound(this.textContent, computerSelection);   
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
  const playerScores = document.querySelector(".player-score p");
  const computerScores = document.querySelector(".computer-score p");
  playerScores.textContent = playerScore;
  computerScores.textContent = computerScore;
};

function playRound(playerSelection, computerSelection) {
  const winner = document.querySelector(".winner");
  if (playerSelection === computerSelection) {
    winner.textContent = "It's a tie!";
    return;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      winner.textContent = "rock wins. You beat the computer, nice job!";
      updateScore();
      return;
    } else {
      computerScore++;
      winner.textContent = "paper wins. computer beat you.";
      updateScore();
      return;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      winner.textContent = "paper wins. You beat the computer, nice job!";
      updateScore();
      return;
    } else {
      computerScore++;
      winner.textContent = "scissors wins. computer beat you.";
      updateScore();
      return;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      winner.textContent = "rock wins. computer beat you.";
      updateScore();
      return;
    } else {
      playerScore++;
      winner.textContent = "scissors wins. You beat the computer, nice job!";
      updateScore();
      return;
    }
  }
}
function game() {
  playMatch()
  do {
    updateScore()
  }
  while(playerScore !== 5 || computerScore !== 5 );
 if (playerScore === 5 || computerScore === 5) {
  
 }
};

game();
