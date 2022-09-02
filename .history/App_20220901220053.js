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
    if (userChoice === computerChoice){
        console.log("Tie!");
        }else if (userChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win!");
        }else if (userChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You win!");
        }else if (userChoice === 'scissors' && computerChoice === 'rock'){
        console.log("You lose!");
        }else if (userChoice === 'rock' && computerChoice === 'paper'){
        console.log("You lose!");
        }else if (userChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lose!");
        }else if (userChoice === 'scissors' || computerChoice === 'paper'){
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
