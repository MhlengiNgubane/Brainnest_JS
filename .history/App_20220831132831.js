

function computerPlay() {
    let computer;
    const randomNumber = Math.floor(Math.random()*3) + 1;

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

console.log(randomNumber(1));