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

function getHumanChoice(event) {
    choice = event.target.id;

    switch(choice) {
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper';
        case 'scissors':
            return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    let result = document.getElementById("action");

    if (humanChoice === 'paper') {
        if (computerChoice === "rock") {
            humanScore++;
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else if (computerChoice === "scissors") {
            computerScore++;
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        } else {
            result.textContent =`Tie! ${computerChoice} equals ${humanChoice}`;
        }

    } else if (humanChoice === 'rock') {
        if (computerChoice === "scissors") {
            humanScore++;
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else if (computerChoice === "paper") {
            computerScore++;
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
        } else {
            result.textContent = `Tie! ${computerChoice} equals ${humanChoice}`
        }

    } else if (humanChoice === 'scissors') {
        if (computerChoice === "paper") {
            humanScore++;
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else if (computerChoice === "rock") {
            computerScore++;
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        } else {
            result.textContent = `Tie! ${computerChoice} equals ${humanChoice}`;
        }
    }
}

function resetGame(winner) {
    // If the resetButton exists, we skip the function.
    if (document.getElementById('resetButton')) return;

    // Creating the text and reset button
    let body = document.querySelector('body');
    let para = document.createElement('p');
    let humanScoreText = document.getElementById('humanScore');
    let computerScoreText = document.getElementById('computerScore');

    if (winner == 'human') {
        para.textContent = 'You win! Click \'Reset\' button to play again.';
        body.appendChild(para);
    } else {
        para.textContent = 'You lose... Click \'Reset\' button to play again.';
        body.appendChild(para);
    }

    let resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.textContent = 'Reset';
    body.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        humanScoreText.textContent = '0';
        computerScoreText.textContent = '0';

        body.removeChild(para);
        body.removeChild(resetButton);
    });
}

function playGame() {
    let buttons = document.getElementById("buttons");
    let humanScoreText = document.getElementById('humanScore');
    let computerScoreText = document.getElementById('computerScore');

    buttons.addEventListener("click", (event) => {
        if (humanScore === 5) {
            resetGame('human');
        } else if (computerScore === 5) {
            resetGame('computer');
        } else {
            humanChoice = getHumanChoice(event);
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
            humanScoreText.textContent = humanScore.toString();
            computerScoreText.textContent = computerScore.toString();
        }
        

    })
}

humanScore = 0;
computerScore = 0;
playGame();
