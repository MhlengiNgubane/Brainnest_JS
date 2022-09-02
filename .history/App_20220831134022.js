

function computerPlay() {
    let computer;
    const randomNumber = Math.floor(Math.random()*3) + 1;

    switch(1){
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

console.log(computerPlay);