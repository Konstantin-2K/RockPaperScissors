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

function playRound(playerSelection, computerSelection) {

    if(playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if(playerSelection === computerSelection) {
        return "Draw!";
    }

}

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter a choice: ").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    if(playRound(playerSelection, computerSelection).substring(4, 8) === "Win") {
        playerScore++;
    } else if(playRound(playerSelection, computerSelection).substring(4, 8) === "Lose"){
        computerScore++;
    }

    if(playerScore === 3) {
        console.log("Player wins!");
        break;
    } else if (computerScore === 3) {
        console.log("Computer wins!");
        break;
    }
}

