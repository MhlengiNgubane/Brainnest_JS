
function computerPlay(computerChoice) {
    computerChoice = Math.random();

    if (computerSelection < 0.34) {
        computerSelection = "rock";
    } else if(computerSelection <= 0.67) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    } 
    return computerSelection;
}

    conplayerSelection = prompt("Do you choose rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection) {
        
        return "The result is a tie!";
    }
    
    else if (playerSelection === "rock") {
        
        if (computerSelection === "scissors") {
            return "rock wins" + " " + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + " " + " computer beat you.";
        }
    }
    
    else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") {
            return "paper wins" + " " + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + " " + " computer beat you.";
        }
            
    }
    
    else if (playerSelection === "scissors") {
        
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