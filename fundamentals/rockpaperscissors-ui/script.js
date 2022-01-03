let playerScore = 0;
let computerScore = 0;
const playerChoiceDiv = document.querySelector(".playerChoice");
const playerChoiceText = playerChoiceDiv.textContent;
const computerChoiceDiv = document.querySelector(".computerChoice");
const computerChoiceText = computerChoiceDiv.textContent;
const playerScoreDiv = document.querySelector(".playerScoreTitle");
const playerScoreText = playerScoreDiv.textContent;
const computerScoreDiv = document.querySelector(".computerScoreTitle");
const computerScoreText = computerScoreDiv.textContent;


function computerPlay() {
    let choice = Math.round(Math.random() * 2);
    switch (choice) {
        case 0:
            return "ROCK";
        case 1:
            return "SCISSORS";
        case 2:
            return "PAPER";
    }
}

const rockClick = document.querySelector('.rock');
rockClick.addEventListener('click', () => {
    playRound("ROCK", computerPlay());
});

const paperClick = document.querySelector('.paper');
paperClick.addEventListener('click', () => {
    playRound("PAPER", computerPlay());
});

const scissorsClick = document.querySelector('.scissors');
scissorsClick.addEventListener('click', () => {
    playRound("SCISSORS", computerPlay());
});

function playerWinsRound() {
    playerScore++;
    computerChoiceDiv.style.background = "var(--red5)";
    playerChoiceDiv.style.background = "var(--lime5)";
}

function computerWinsRound() {
    computerScore++;
    playerChoiceDiv.style.background = "var(--red5)";
    computerChoiceDiv.style.background = "var(--lime5)";
}

function renderChoices(playerChoice, computerChoice) {
    console.log(playerChoice)
    switch (computerChoice) {
        case "ROCK":
            computerChoiceDiv.textContent = "🪨";
            break;
        case "SCISSORS":
            computerChoiceDiv.textContent = "✂";
            break;
        case "PAPER":
            computerChoiceDiv.textContent = "📝";
            break;
    }
    switch (playerChoice) {
        case "ROCK":
            playerChoiceDiv.innerHTML = "🪨";
            break;
        case "SCISSORS":
            playerChoiceDiv.textContent = "✂";
            break;
        case "PAPER":
            playerChoiceDiv.textContent = "📝";
            break;
    }

}

function draw() {
    playerChoiceDiv.style.background = "var(--red5)";
    computerChoiceDiv.style.background = "var(--red5)";
}

function playRound(playerChoice, computerPlay) {
    if (playerChoice == computerPlay) {
        draw();
        renderChoices(playerChoice, computerPlay);
    } else if (playerChoice == "ROCK" && computerPlay == "SCISSORS") {
        playerWinsRound();
        renderChoices(playerChoice, computerPlay);
    } else if (playerChoice == "PAPER" && computerPlay == "ROCK") {
        playerWinsRound();
        renderChoices(playerChoice, computerPlay);
    } else if (playerChoice == "SCISSORS" && computerPlay == "PAPER") {
        playerWinsRound();
        renderChoices(playerChoice, computerPlay);
    } else if (computerPlay == "ROCK" && playerChoice == "SCISSORS") {
        computerWinsRound();
        renderChoices(playerChoice, computerPlay);
    } else if (computerPlay == "PAPER" && playerChoice == "ROCK") {
        computerWinsRound();
        renderChoices(playerChoice, computerPlay);
    } else if (computerPlay == "SCISSORS" && playerChoice == "PAPER") {
        computerWinsRound();
        renderChoices(playerChoice, computerPlay);
    }
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    playerScoreDiv.textContent = `Player: ${playerScore}`;
}

if (playerScore > computerScore) {
    console.log("The HUMAN wins!");
} else if (computerScore > playerScore) {
    console.log("The MACHINE wins!");
} else {
    console.log("It's a draw mate");
}