const player = prompt("Do you choose rock, paper or scissors?");
player = player.toLowerCase();


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

const playerSelection = player;
const computerSelection = computerPlay();

console.log("Computer chooses: " + computerPlay());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose!";
  } else if (playerSelection === "scissors" || computerSelection === "paper") {
    return "You win!";
  } else {
    console.log("Invalid input, please try again");
  }
}

console.log(playRound(player.toLowerCase(), computerSelection));
