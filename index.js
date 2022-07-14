const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const startBtn = document.getElementById("startGame");
const resetBtn = document.getElementById("resetGame");
const compImage = document.getElementById("compImage");
const rock = "/images/gon-rock.jpeg";
const paper = "/images/gon-paper.jpeg";
const scissor = "/images/gon-scissor.jpg";
let roundNum = 0;
let playerScoreNum = 0;
let computerScoreNum = 0;
let drawCountNum = 0;
const choices = ["rock", "paper", "scissor"];



// Function for computer to play
function computerPlay() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (computerChoice === "rock") {
        compImage.setAttribute("src", rock);
        compImage.style.visibility = "visible";
    } else if (computerChoice === "paper") {
        compImage.setAttribute("src", paper);
        compImage.style.visibility = "visible";
    } else if (computerChoice === "scissor") {
        compImage.setAttribute("src", scissor);
        compImage.style.visibility = "visible";
    }
    return computerChoice;
}

function handleRock() {
    playRound("rock");
}

function handlePaper() {
    playRound("paper");
}

function handleScissor() {
    playRound("scissor");
}

function userPlay() {
    rockBtn.addEventListener("click", handleRock);
    
    paperBtn.addEventListener("click", handlePaper);
    
    scissorBtn.addEventListener("click", handleScissor);
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
    if (playerScoreNum == 5 || computerScoreNum == 5) {
        const winner = playerScoreNum === 5 ? "You win the game!" : "Computer wins!";
        alert(winner);
        rockBtn.removeEventListener("click", handleRock);
        paperBtn.removeEventListener("click", handlePaper);
        scissorBtn.removeEventListener("click", handleScissor);
        updateScore();
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
    compImage.style.visibility = "hidden";
}, {once: true});

resetBtn.addEventListener("click", () => {
    roundNum = 0;
    playerScoreNum = 0;
    computerScoreNum = 0;
    drawCountNum = 0;
    updateScore();
    console.log("erased");
    game();
    compImage.style.visibility = "hidden";
});