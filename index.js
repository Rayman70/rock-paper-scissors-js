const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const startBtn = document.getElementById("startGame");
const resetBtn = document.getElementById("resetGame");
let roundNum = 0;
let playerScoreNum = 0;
let computerScoreNum = 0;
let drawCountNum = 0;



// Function for computer to play
function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function userPlay() {
    rockBtn.addEventListener("click", () => {
        playRound("rock");
    });
    
    paperBtn.addEventListener("click", () => {
        playRound("paper");
    });
    
    scissorBtn.addEventListener("click", () => {
        playRound("scissor");
    });
}

    

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if(playerSelection === "rock") {
        if(computerSelection ==="rock") {
            drawCountNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log("It's a Rock Draw!")
        } else if(computerSelection === "paper") {
            computerScoreNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log(`${computerSelection} beats ${playerSelection}. \n Computer Score: ` + computerScoreNum);
        } else if(computerSelection === "scissor") {
            playerScoreNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log(`${playerSelection} beats ${computerSelection}. \n Player Score: ` + playerScoreNum);
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "rock") {
            playerScoreNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log(`${playerSelection} beats ${computerSelection}. \n Player Score: ` + playerScoreNum);
        } else if(computerSelection === "paper") {
            drawCountNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log("Its a Paper Draw!");
        } else if(computerSelection === "scissor") {
            computerScoreNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log(`${computerSelection} beats ${playerSelection}. \n Computer Score: ` + computerScoreNum);
        }
    } else if (playerSelection === "scissor") {
        if(computerSelection === "rock") {
            computerScoreNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log(`${computerSelection} beats ${playerSelection}. \n Computer Score: ` + computerScoreNum);
        } else if(computerSelection === "paper") {
            playerScoreNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log(`${playerSelection} beats ${computerSelection}. \n Player Score: ` + playerScoreNum);
        } else if(computerSelection === "scissor") {
            drawCountNum ++;
            roundNum ++;
            updateScore();
            checkWinner();
            console.log("It's a Scissor Draw!");
        }
    }
}

function updateScore() {
    document.getElementById("round").textContent = roundNum;
    document.getElementById("playerScore").textContent = playerScoreNum;
    document.getElementById("computerScore").textContent = computerScoreNum;
    document.getElementById("draws").textContent = drawCountNum;
}

function checkWinner() {
    if (playerScoreNum === 5 || computerScoreNum === 5) {
        const winner = playerScoreNum === 5 ? "You win the game!" : "Computer wins!";
        alert(winner);
        updateScore();
        /**if (playerScoreNum > 5 || computerScoreNum > 5) {
            roundNum = drawCountNum = 0;
            playerScoreNum = computerScoreNum = 0;
            updateScore();
        }**/
        // maybe add an alert to click reset and then "disable" the choices besides reset
    }
}

function game() {
    userPlay();
    computerPlay();
    playRound();
    updateScore();
    checkWinner();
}
    
startBtn.addEventListener("click", () => {
    game();
}, {once: true});

resetBtn.addEventListener("click", () => {
    roundNum = 0;
    playerScoreNum = 0;
    computerScoreNum = 0;
    drawCountNum = 0;
    updateScore();
    console.log("erased");
});