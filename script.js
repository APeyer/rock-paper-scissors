const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
    
buttons.forEach((button) => {
    button.addEventListener('click', event => playRound(event.target.id));
});

function playRound(playerSelection) {

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
        
    computerSelection = getComputerChoice();
        
    if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = 'You loose, Paper win over Rock';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result.textContent = 'You win, Rock win over Scissors';
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        result.textContent = 'Rock over Rock, try again';
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result.textContent = 'Paper over Paper, try again';
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent = 'You loose, Scissors win over Paper';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = 'You win, Paper win over Rock';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent = 'You win, Scissors win over Paper';
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        result.textContent = 'Scissors over Scissors, try again';
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent = 'You loose, Rock win over Scissors';
    } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        result.textContent = 'Enter Rock, Paper or Scissors';
    }
}
    
/*
function winner(){
    switch(true){
        case 'playerSelection === "rock" && computerSelection === "paper"':
            console.log("You loose, Paper win over Rock");
            break;
        case 'playerSelection === "rock" && computerSelection === "scissors"':
            console.log("You win, Rock win over Scissors");
            break;
        case 'playerSelection === "rock" && computerSelection === "rock"':
            console.log("Rock over Rock, try again")
            break;
    }
}
*/