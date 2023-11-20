const buttons = document.querySelectorAll('button');
    
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
            return console.log("You loose, Paper win over Rock");
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return console.log("You win, Rock win over Scissors");
        } else if (playerSelection === "rock" && computerSelection === "rock") {
            return console.log("Rock over Rock, try again")
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            return console.log("Paper over Paper, try again")
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return console.log("You loose, Scissors win over Paper")
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return console.log("You win, Paper win over Rock")
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return console.log("You win, Scissors win over Paper")
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return console.log("Scissors over Scissors, try again")
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return console.log("You loose, Rock win over Scissors")
        } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
            return console.log("Enter Rock, Paper or Scissors");
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