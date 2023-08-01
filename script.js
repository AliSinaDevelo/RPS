function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "Invalid choice. Please choose Rock, Paper, or Scissors.";
    }
    

    if (playerSelection === computerSelection) {
        return "It's a tie! You both chose " + playerSelection;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function updateResult(result) {
    const resultText = document.getElementById("result-btn");
    resultText.textContent = result;
}

function handleChoice(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResult(result);
}
    
function game() {
    const choiceBtns = document.querySelectorAll(".choice-btn");
    choiceBtns.forEach((btn) => {
      btn.addEventListener("click", handleChoice);
    });
}  

game();

