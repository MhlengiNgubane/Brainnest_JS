

function computerPlay(computerChoice) {
    computerChoice = Math.random();

    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
        computerSelection = "scissors";
    } 
    return computerSelection;
    //console.log("Computer chooses: " + computerChoice);
}

console.log(computerPlay());

/*function playRound(playerSelection, computerSelection){
    // code
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/