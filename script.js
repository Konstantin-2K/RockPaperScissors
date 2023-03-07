function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    let computerChoice = "";
    if (randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(computerSelection) {
    console.log('round start');
    if (playerChoice === "rock" && computerSelection === "paper") {
        document.getElementById('result').textContent = "Result: You Lose! Paper beats Rock";
        computerScore++;
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        document.getElementById('result').textContent = "Result: You Win! Rock beats Scissors";
        playerScore++;
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        document.getElementById('result').textContent = "Result: You Lose! Scissors beats Paper";
        computerScore++;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        document.getElementById('result').textContent = "Result: You Win! Paper beats Rock";
        playerScore++;
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        document.getElementById('result').textContent = "Result: You Lose! Rock beats Scissors"
        computerScore++;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        document.getElementById('result').textContent = "Result: You Win! Scissors beats Paper";
        playerScore++;
    } else if (playerChoice === computerSelection) {
        document.getElementById('result').textContent = "Result: Draw!";
    }

    if (playerScore === 5) {
        document.getElementById('result').textContent = "Player wins game!"
        document.getElementById('face').textContent = ":)"
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        document.getElementById('result').textContent = "Computer wins game!"
        document.getElementById('face').textContent = ":("
        playerScore = 0;
        computerScore = 0;
    }
}

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const crockBtn = document.getElementById('crock');
const cpaperBtn = document.getElementById('cpaper');
const cscissorsBtn = document.getElementById('cscissors');

rockBtn.addEventListener(`click`, getPlayerChoice);
paperBtn.addEventListener(`click`, getPlayerChoice);
scissorsBtn.addEventListener(`click`, getPlayerChoice);


function getPlayerChoice() {
    document.getElementById('face').textContent = ""
    switch (this.textContent) {
        case 'Rock':
            playerChoice = 'rock'
            rockBtn.style.cssText = 'color: white; background: purple;';
            paperBtn.style.cssText = 'color: black; background: white;';
            scissorsBtn.style.cssText = 'color: black; background: white;';
            break;
        case 'Paper':
            playerChoice = 'paper'
            rockBtn.style.cssText = 'color: black; background: white;';
            paperBtn.style.cssText = 'color: white; background: purple;';
            scissorsBtn.style.cssText = 'color: black; background: white;';
            break;
        case 'Scissors':
            playerChoice = 'scissors'
            rockBtn.style.cssText = 'color: black; background: white;';
            paperBtn.style.cssText = 'color: black; background: white;';
            scissorsBtn.style.cssText = 'color: white; background: purple;';
            break;
    }

    document.getElementById('playerSelection').textContent = 'Your choice: ' + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

    computerChoice = getComputerChoice();
    document.getElementById('computerSelection').textContent = "Computer choice: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    switch (computerChoice) {
        case 'rock':
            crockBtn.style.cssText = 'color: white; background: purple;';
            cpaperBtn.style.cssText = 'color: black; background: white;';
            cscissorsBtn.style.cssText = 'color: black; background: white;';
            break;
        case 'paper':
            crockBtn.style.cssText = 'color: black; background: white;';
            cpaperBtn.style.cssText = 'color: white; background: purple;';
            cscissorsBtn.style.cssText = 'color: black; background: white;';
            break;
        case 'scissors':
            crockBtn.style.cssText = 'color: black; background: white;';
            cpaperBtn.style.cssText = 'color: black; background: white;';
            cscissorsBtn.style.cssText = 'color: white; background: purple;';
            break;
    }

    playRound(computerChoice);

    document.getElementById('playerScore').textContent = 'Player: ' + playerScore;
    document.getElementById('computerScore').textContent = 'Computer: ' + computerScore;
}


let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;