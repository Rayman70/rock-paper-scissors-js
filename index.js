// Function for computer to play
function computerPlay() {
    // Generate random integer
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);

    if(computerChoice === 1) {
        let choice = "Rock";
        return choice;
    } else if(computerChoice === 2) {
        let choice = "Paper";
        return choice;
    } else {
        let choice = "Scissor";
        return choice;
    }
}
console.log(computerPlay)