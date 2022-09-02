

function computerPlay() {
    let computer;
    const randomNumber = 1;

    switch(randomNumber){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

console.log(computerPlay(1));