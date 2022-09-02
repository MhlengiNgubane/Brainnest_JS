let userChoice = prompt("Do you choose rock, paper or scissors?");
userChoice = userChoice.toLowerCase();

function computerPlay(computerChoice){
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } 
    return computerChoice
}
const choice2 = computerPlay();

function playRound(playerSelection,choice2) {
    
    if (playerSelection === choice2) {
        
        return "The result is a tie!" + " " + "Lets play again." ;
    }
    
    else if (playerSelection === "rock") {
        
        if (choice2 === "scissors") {
            return "rock wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + "<br>" + "Your really smart computer beat you.";
        }
    }
    
    else if (playerSelection === "paper") {
        
        if (choice2 === "rock") {
            return "paper wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + "<br>" + "Your really smart computer beat you.";
        }
            
    }
    
    else if (playerSelection === "scissors") {
        
        if (choice2 === "rock") {
            return "rock wins" + "<br>" + "Your really smart computer beat you.";
        }
        else {
            return "scissors win" + "<br>" + "You beat the computer, nice job!";
        }
    }
    
    
}

const playerSelection = userChoice;
console.log("player chooses: " + playerSelection);
console.log("Computer chose: " + choice2 );
console.log(playRound(playerSelection,computerSelection));
