let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById("player");
playerScoreDisplay.innerText = playerScore;

const computerScoreDisplay = document.getElementById("computer");
computerScoreDisplay.innerText = computerScore;

const display = document.getElementById("display");

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
  display.innerText = playRound("rock", getComputerChoice());
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
  display.innerText = playRound("paper", getComputerChoice());
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
  display.innerText = playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissors";
  }
}

function checkScore() {
  if (playerScore > 4) {
    display.style.borderColor = "blue";
    playerScoreDisplay.style.borderColor = "blue";
    computerScoreDisplay.style.borderColor = "orange";
    display.innerText = "You win!";
  } else if (computerScore > 4) {
    display.style.borderColor = "orange";
    playerScoreDisplay.style.borderColor = "orange";
    computerScoreDisplay.style.borderColor = "blue";
    display.innerText = "Computer Wins!";
  }
}

function playRound(playerSelection, computerSelection) {
  let choice = playerSelection;
  let comp = computerSelection;
  if (choice === "rock") {
    if (comp === "scissors") {
      playerScore++;
      playerScoreDisplay.innerText = playerScore;
      checkScore();
      return "You win! Rock beats Scissors";
    } else if (comp === "paper") {
      computerScore++;
      computerScoreDisplay.innerText = computerScore;
      checkScore();
      return "You lose! Paper beats Rock";
    } else {
      return "Tie! Go again!"
    }
  } else if (choice === "paper") {
    if (comp === "rock") {
      playerScore++;
      playerScoreDisplay.innerText = playerScore;
      checkScore();
      return "You win! Paper beats Rock";
    } else if (comp === "scissors") {
      computerScore++;
      computerScoreDisplay.innerText = computerScore;
      checkScore();
      return "You lose! Scissors beat Paper";
    } else {
      return "Tie! Go again!"
    }
  } else if (choice === "scissors") {
    if (comp === "paper") {
      playerScore++;
      playerScoreDisplay.innerText = playerScore;
      checkScore();
      return "You win! Scissors beat Paper";
    } else if (comp === "rock") {
      computerScore++;
      computerScoreDisplay.innerText = computerScore;
      checkScore();
      return "You lose! Rock beats Scissors"
    } else {
      return "Tie! Go again!"
    }
  }
}