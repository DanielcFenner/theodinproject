let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choice = Math.round(Math.random() * 2);
    switch(choice) {
        case 0:
            return "ROCK";
        case 1:
            return "SCISSORS";
        case 2: 
            return "PAPER";
    }
}

function playerChoice() {
    let choice = prompt("What is your choice, Rock, Paper or Scissors?").toUpperCase();
    console.log(choice)
    return choice;
}

function playRound(playerChoice, computerPlay) {
    if (playerChoice == computerPlay) {
        console.log("DRAW!");
    } else if (playerChoice == "ROCK" && computerPlay == "SCISSORS") {
        playerScore++;
        console.log("Human wins!");
    } else if (playerChoice == "PAPER" && computerPlay == "ROCK") {
        playerScore++;
        console.log("Human wins!");
    } else if (playerChoice == "SCISSORS" && computerPlay == "PAPER") {
        playerScore++;
        console.log("Human wins!");
    } else if (computerPlay == "ROCK" && playerChoice == "SCISSORS") {
        computerScore++;
        console.log("Computer wins!");
    } else if (computerPlay == "PAPER" && playerChoice == "ROCK") {
        computerScore++;
        console.log("Computer wins!");
    } else if (computerPlay == "SCISSORS" && playerChoice == "PAPER") {
        computerScore++;
        console.log("Computer wins!");
    }
    console.log(`Current score is: Human - ${playerScore} || Computer - ${computerScore}`)
}

for (let i = 0; i < 5; i++) {
    console.log(`Round ${i}, fight!`)
    playRound(playerChoice(), computerPlay());
}

if (playerScore > computerScore) {
    console.log("The HUMAN wins!");
} else if (computerScore > playerScore) {
    console.log("The MACHINE wins!");
} else {
    console.log("It's a draw mate");
}