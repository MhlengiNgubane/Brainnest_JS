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
    if (playerSelection.toLowerCase() === computerSelection) {
        
        return "The result is a tie!";
    }
    
    else if (playerSelection.toLowerCase() === "rock") {
        
        if (computerSelection === "scissors") {
            return "rock wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + "<br>" + " computer beat you.";
        }
    }
    
    else if (playerSelection.toLowerCase() === "paper") {
        
        if (computerSelection === "rock") {
            return "paper wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + "<br>" + " computer beat you.";
        }
            
    }
    
    else if (playerSelection.toLowerCase() === "scissors") {
        
        if (computerSelection === "rock") {
            return "rock wins" + "<br>" + " computer beat you.";
        }
        else {
            return "scissors win" + "<br>" + "You beat the computer, nice job!";
        }
    } 

    else {
        return
    }
    
    
    
}

const computerSelection = computerPlay();
console.log("player chooses: " + playerSelection.toLowerCase());
console.log("Computer chooses: " + computerPlay());
console.log(playRound(playerSelection.toLowerCase(), computerSelection));