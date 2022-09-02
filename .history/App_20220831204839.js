

function computerPlay(computerSelection) {
    let computerSelection = Math.random();
    if (computerSelection< 0.34) {
        computerSelection = "rock";
    } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    } 
    //console.log("Computer chooses: " + computerChoice);
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    // code
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));