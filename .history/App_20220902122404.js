function game() {
    for (let i = 0; i < 5; i++) {
      
        let playerChoice = prompt("Do you choose rock, paper or scissors?");
        playerChoice = playerChoice.toLowerCase();
        const playerSelection = playerChoice;

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
        const computerSelection = computerPlay();

        function playRound(playerSelection,computerSelection) {
            
            if (playerSelection === computerSelection) {
                
                return "It's a tie!" ;
            }
            
            else if (playerSelection === "rock") {
                
                if (computerSelection === "scissors") {
                    return "rock wins. You beat the computer, nice job!";
                }
                else {
                    return "paper wins. computer beat you.";
                }
            }
            
            else if (playerSelection === "paper") {
                
                if (computerSelection === "rock") {
                    return "paper wins. You beat the computer, nice job!";
                }
                else {
                    return "scissors wins. computer beat you.";
                }
                    
            }
            
            else if (playerSelection === "scissors") {
                
                if (computerSelection === "rock") {
                    return "rock wins. computer beat you.";
                }
                else {
                    return "scissors wins. You beat the computer, nice job!";
                }
            }
            
            
        }

        console.log("player: " + playerSelection);
        console.log("Computer: " + computerSelection );
        console.log(playRound(playerSelection,computerSelection));


        function scoreboard() {
            let playerScore = 0;
            x = playerScore;
            let computerScore = 0
            y = computerScore
            if (playerSelection === computerSelection) {
                
                return (Number(x), Number(y));
            }
            
            else if (playerSelection === "rock") {
                
                if (computerSelection === "scissors") {
                    return (Number(x) + 1), Number(y);
                }
                else {
                    return (Number(x), (Number(y) + 1));
                }
            }
            
            else if (playerSelection === "paper") {
                
                if (computerSelection === "rock") {
                    return (Number(x) + 1), Number(y);
                }
                else {
                    return (Number(x), (Number(y) + 1));
                }
                    
            }
            
            else if (playerSelection === "scissors") {
                
                if (computerSelection === "rock") {
                    return (Number(x), (Number(y) + 1));
                }
                else {
                    return (Number(x) + 1), Number(y);
                }
            }
            
            
            if (x > y) {
                console.log("PLAYER WON");
              } else if (x < y) {
                console.log("COMPUTER WON");
            }
        }
        console.log(scoreboard()
    }
}

game();



