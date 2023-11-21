const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

let playerCounter = 0;
let computerCounter = 0;

buttons.forEach((button) => {
    button.addEventListener('click', event => playRound(event.target.id));
});

playerScore.textContent = playerCounter;
computerScore.textContent = computerCounter;

const getComputerChoice = function() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "rock";
    } else if (computerSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection) {

    function endGameIfWinner (){
        if (playerCounter == 5){
            result.textContent = 'Good job, you are the winner!';
            playerCounter = 0;
            computerCounter = 0;
        } else if (computerCounter == 5){
            result.textContent = 'Computer win, you lost';
            playerCounter = 0;
            computerCounter = 0;
        }
    }
        
    computerSelection = getComputerChoice();
    
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = 'You loose, Paper win over Rock';
        computerCounter ++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result.textContent = 'You win, Rock win over Scissors';
        playerCounter ++;
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        result.textContent = 'Rock over Rock, try again';
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result.textContent = 'Paper over Paper, try again';
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent = 'You loose, Scissors win over Paper';
        computerCounter ++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = 'You win, Paper win over Rock';
        playerCounter ++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent = 'You win, Scissors win over Paper';
        playerCounter ++;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        result.textContent = 'Scissors over Scissors, try again';
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent = 'You loose, Rock win over Scissors';
        computerCounter ++;
    } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        result.textContent = 'Enter Rock, Paper or Scissors';
    }
    
    // call end game function at end, after incrementing counters
    endGameIfWinner();
    playerScore.textContent = playerCounter;
    computerScore.textContent = computerCounter;
}
    
/*
switch(playerSelection){
    case 'rock':
        if (computerSelection === "paper"){
            result.textContent = 'You loose, Paper win over Rock';
            computerCounter ++;
        } else if (computerSelection === "scissors"){
            result.textContent = 'You win, Rock win over Scissors';
            playerCounter ++;
        } else if (computerSelection === "rock"){
            result.textContent = 'Rock over Rock, try again';
        }
        break;
    case 'paper':
        if (computerSelection === "paper"){
            result.textContent = 'Paper over Paper, try again';
        } else if (computerSelection === "scissors"){
            result.textContent = 'You loose, Scissors win over Paper';
            computerCounter ++;
        } else if (computerSelection === "rock"){
            result.textContent = 'You win, Paper win over Rock';
            playerCounter ++;
        }
    case 'scissors':
        if (computerSelection === "paper"){
            result.textContent = 'You win, Scissors win over Paper';
            playerCounter ++;
        } else if (computerSelection === "scissors"){
            result.textContent = 'Scissors over Scissors, try again';
        } else if (computerSelection === "rock"){
            computerCounter ++;
        }
}
*/