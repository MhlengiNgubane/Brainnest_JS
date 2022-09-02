let playerSelection = prompt("Do you choose rock, paper or scissors?");

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


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        
        return "The result is a tie!" + " " + "Lets play again." ;
    }
    
    else if (playerSelection === "rock") {
        
        if (computerSelection === "scissors") {
            return "rock wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + "<br>" + "Your really smart computer beat you.";
        }
    }
    
    else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") {
            return "paper wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + "<br>" + "Your really smart computer beat you.";
        }
            
    }
    
    else if (playerSelection === "scissors") {
        
        if (computerSelection === "rock") {
            return "rock wins" + "<br>" + "Your really smart computer beat you.";
        }
        else {
            return "scissors win" + "<br>" + "You beat the computer, nice job!";
        }
    }
    
    
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("player chooses: " + playerSelection);
console.log("Computer chooses: " + computerPlay());
console.log(playRound(playerSelection, computerSelection));