function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    let computerChoice = "";
    if(randomNumber <= 33) {
        computerChoice = "rock";
    } else if(randomNumber >= 34 && randomNumber <= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(computerSelection) {
    console.log('round start');
    if(playerChoice === "rock" && computerSelection === "paper") {
        document.getElementById('result').textContent = "You Lose! Paper beats Rock";
        computerScore++;
    } else if(playerChoice === "rock" && computerSelection === "scissors") {
        document.getElementById('result').textContent = "You Win! Rock beats Scissors";
        playerScore++;
    } else if(playerChoice === "paper" && computerSelection === "scissors") {
        document.getElementById('result').textContent = "You Lose! Scissors beats Paper";
        computerScore++;
    } else if(playerChoice === "paper" && computerSelection === "rock") {
        document.getElementById('result').textContent = "You Win! Paper beats Rock";
        playerScore++;
    } else if(playerChoice === "scissors" && computerSelection === "rock") {
        document.getElementById('result').textContent = "You Lose! Rock beats Scissors"
        computerScore++;
    } else if(playerChoice === "scissors" && computerSelection === "paper") {
        document.getElementById('result').textContent = "You Win! Scissors beats Paper";
        playerScore++;
    } else if(playerChoice === computerSelection) {
        document.getElementById('result').textContent = "Draw!";
    }

    if(playerScore === 5) {
        document.getElementById('result').textContent = "Player wins game!"
    } else if(computerScore === 5) {
        document.getElementById('result').textContent = "Computer wins game!"
    }
}

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener(`click`,  getPlayerChoice);
paperBtn.addEventListener(`click`, getPlayerChoice);
scissorsBtn.addEventListener(`click`, getPlayerChoice);


function getPlayerChoice() {
    switch(this.textContent) {
        case 'Rock':
            playerChoice = 'rock'
            break;
        case 'Paper':
            playerChoice = 'paper'
            break;
        case 'Scissors':
            playerChoice = 'scissors'
            break;
    }
    console.log('Player choice: ' + playerChoice);
    computerChoice = getComputerChoice();
    console.log('Computer choice: ' + computerChoice);
    playRound(computerChoice);
}


let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;