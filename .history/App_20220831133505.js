

function computerPlayfunction myFunction() {
    var text;
    var fruits = document.getElementById("myInput").value;
  
    switch(fruits) {
      case "Banana":
        text = "Banana is good!";
      break;
      case "Orange":
      text = "I am not a fan of orange.";
      break;
      case "Apple":
      text = "How you like them apples?";
      break;
      default:
      text = "I have never heard of that fruit...";
    }
    document.getElementById("demo").innerHTML = text;
  }() {
    let computer;
    const randomNumber = Math.floor(Math.random()*3) + 1;

    switch(randomNumber){
        case "1":
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