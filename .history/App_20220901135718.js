const playerSelection = prompt("Do you choose rock, paper or scissors?");
const computerSelection = computerPlay();

function computerPlay() {
    const computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } 
    return computerChoice;
}



function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() === computerSelection) {
        
        return "The result is a tie!";
    }
    
    else if (playerSelection.toLowerCase() === "rock") {
        
        if (computerSelection === "scissors") {
            return "rock wins" + " " + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + " " + " computer beat you.";
        }
    }
    
    else if (playerSelection.toLowerCase() === "paper") {
        
        if (computerSelection === "rock") {
            return "paper wins" + " " + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + " " + " computer beat you.";
        }
            
    }
    
    else if (playerSelection.toLowerCase() === "scissors") {
        
        if (computerSelection === "rock") {
            return "rock wins" + " " + " computer beat you.";
        }
        else {
            return "scissors win" + " " + "You beat the computer, nice job!";
        }
    } 

    else {
        return "Please Try again or Check Your Spelling"
    }
    
    
    
}

console.log("player chooses: " + playerSelection.toLowerCase());
console.log("Computer chooses: " + computerPlay());
console.log(playRound(playerSelection.toLowerCase(), computerSelection));