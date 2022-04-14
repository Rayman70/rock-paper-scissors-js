// Function for computer to play
function computerPlay() {
    // Generate random integer
    const computerChoice = Math.floor(Math.random() * 3) +1;

    if(computerChoice === 1) {
        let choice = "rock";
        return choice;
    } else if(computerChoice === 2) {
        let choice = "paper";
        return choice;
    } else if(computerChoice === 3) {
        let choice = "scissor";
        return choice;
    }
}
//console.log(computerPlay);

//player prompt
function playerPlay() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissor: ").toLowerCase();

    if(playerChoice === "rock") {
        return playerChoice;
    } else if(playerChoice === "paper") {
        return playerChoice;
    } else if(playerChoice === "scissor") {
        return playerChoice;
    }
}
//console.log(playerPlay);

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection ==="rock") {
            return "It's a draw! Both chose Rock"
        } else if(computerSelection === "paper") {
            return "You lose! Paper beats Rock"
        } else if(computerSelection === "scissor") {
            return "You win! Rock beats Scissor"
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "rock") {
            return "You win! Paper beats Rock"
        } else if(computerSelection === "paper") {
            return "It's a draw! Both chose paper"
        } else if(computerSelection === "scissor") {
            return "You lose! Scissor beats Paper"
        }
    } else if (playerSelection === "scissor") {
        if(computerSelection === "rock") {
            return "You lose! Rock beats Scissor"
        } else if(computerSelection === "paper") {
            return "You win! Scissor beats Paper"
        } else if(computerSelection === "scissor") {
            return "It's a draw! Both chose Scissor"
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection)
        console.log("Player's choice", playerSelection);
        console.log("Computer's choice", computerSelection);
        console.log("Result is", result);
    }
}


game();