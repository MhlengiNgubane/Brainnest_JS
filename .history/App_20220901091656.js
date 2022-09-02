

function computerPlay(computerSelection) {
    computerSelection = Math.random();

    if (computerSelection < 0.34) {
        computerSelection = "rock";
    } else if(computerSelection <= 0.67) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    } 
    return computerSelection;
}

console.log("Computer chooses: " + computerPlay());

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {

        return "The result is a tie!" + " " + "Lets play again." ;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("Computer chooses: " + playerSelection);
console.log("Computer chooses: " + computerPlay());
console.log(playRound(playerSelection, computerSelection));