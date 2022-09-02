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
    if (playerSelection === computerChoice){
        console.log("Tie!");
        }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log("You win!");
        }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log("You win!");
        }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log("You lose!");
        }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log("You lose!");
        }else if (playerSelection === 'paper' && computerChoice === 'scissors'){
        console.log("You lose!");
        }else if (playerSelection === 'scissors' || computerChoice === 'paper'){
        console.log("You win!");
        }else{
        console.log("Invalid input, please try again");
        }
}

const playerSelection = player;
const computerSelection = computerPlay();
console.log("player chooses: " + playerSelection.toLowerCase());
console.log("Computer chooses: " + computerPlay());
console.log(playRound(player.toLowerCase(), computerSelection));
