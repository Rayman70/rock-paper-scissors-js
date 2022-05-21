const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const startBtn = document.getElementById("startGame");
const resetBtn = document.getElementById("resetGame");
const drawCount = document.getElementById("draws");
let playerScore = parseInt(document.getElementById("playerScore").textContent);
let computerScore = parseInt(document.getElementById("computerScore").textContent);
let round = 0;
let tie = 0;


// Function for computer to play
function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// Player choice
function playerPlay() {
    rockBtn.addEventListener("click", () => {
        computerPlay();
        playRound("rock");
    });
    paperBtn.addEventListener("click", () => {
        computerPlay();
        playRound("paper");
    });
    scissorBtn.addEventListener("click", () => {
        computerPlay();
        playRound("scissor");
    });
    
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if(playerSelection === "rock") {
        if(computerSelection ==="rock") {
            console.log("It's a Rock Draw!")
            
        } else if(computerSelection === "paper") {
            computerScore ++;
            document.getElementById("computerScore").textContent = computerScore;
            console.log(`${computerSelection} beats ${playerSelection}. \n Computer Score: ` + computerScore);
        } else if(computerSelection === "scissor") {
            playerScore ++;
            document.getElementById("playerScore").textContent = playerScore;
            console.log(`${playerSelection} beats ${computerSelection}. \n Player Score: ` + playerScore);
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "rock") {
            playerScore ++;
            document.getElementById("playerScore").textContent = playerScore;
            console.log(`${playerSelection} beats ${computerSelection}. \n Player Score: ` + playerScore);
        } else if(computerSelection === "paper") {
            console.log("Its a Paper Draw!");
        } else if(computerSelection === "scissor") {
            computerScore ++;
            document.getElementById("computerScore").textContent = computerScore;
            console.log(`${computerSelection} beats ${playerSelection}. \n Computer Score: ` + computerScore);
        }
    } else if (playerSelection === "scissor") {
        if(computerSelection === "rock") {
            computerScore ++;
            document.getElementById("computerScore").textContent = computerScore;
            console.log(`${computerSelection} beats ${playerSelection}. \n Computer Score: ` + computerScore);
        } else if(computerSelection === "paper") {
            playerScore ++;
            document.getElementById("playerScore").textContent = playerScore;
            console.log(`${playerSelection} beats ${computerSelection}. \n Player Score: ` + playerScore);
        } else if(computerSelection === "scissor") {
            console.log("It's a Scissor Draw!");
        }
    }
}

function game() {
    if (round >= 5) {
        alert("Maximum rounds played.");
    } else {
        alert(`Round ${round}`);
        playerPlay();
        console.log("Score player: " + playerScore);
        console.log("Score computer: " + computerScore);
        
        round ++;
    }
    resetBtn.addEventListener("click", () => {
        round = 0;
        document.getElementById("playerScore").textContent = 0;
        document.getElementById("computerScore").textContent = 0;
    });

}

startBtn.addEventListener("click", () => {
    game();
});

