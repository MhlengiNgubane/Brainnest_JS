

function computerPlay(computerSelection) {
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "rock";
    } else if(computerSelection <= 0.67) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    } 
    computerSelection
}
computerSelection

console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    // code
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));