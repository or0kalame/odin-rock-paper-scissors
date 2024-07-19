function getComputerChoice() {
    let choice = "";
    let option = Math.floor(Math.random() * 3);
    
    if (option === 0) {
        choice = 'rock';
    } else if (option === 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter rock/paper/scissors:");
    choice = choice.toLowerCase();

    while (true) {
        if (choice === 'paper' || choice === 'rock' || choice === 'scissors') {
            return choice;
        }
        else {
            alert("Incorrect Value!");
            choice = prompt("Enter rock/paper/scissors:");
            choice = choice.toLowerCase();
        }
    }
}

function playRound() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === 'paper') {
        if (computerChoice === "rock") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
        else if (computerChoice === "scissors") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        } else {
            console.log(`Tie! ${computerChoice} equals ${humanChoice}`)
        }
    } else if (humanChoice === 'rock') {
        if (computerChoice === "scissors") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
        else if (computerChoice === "paper") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        } else {
            console.log(`Tie! ${computerChoice} equals ${humanChoice}`)
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === "paper") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
        else if (computerChoice === "rock") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        } else {
            console.log(`Tie! ${computerChoice} equals ${humanChoice}`)
        }
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`This is round ${round}`);
        playRound(humanScore, computerScore);
        console.log(`Human score = ${humanScore}\nComputer score = ${computerScore}`);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();
