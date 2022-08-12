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

function playRound(playerSelection, computerSelection) {
  let choice = playerSelection.toLowerCase();
  let comp = computerSelection;
  if (choice === "rock") {
    if (comp === "scissors") {
      player++;
      return "You win! Rock beats Scissors";
    } else if (comp === "paper") {
      computer++;
      return "You lose! Paper beats Rock";
    } else {
      return "Tie! Go again!"
    }
  } else if (choice === "paper") {
    if (comp === "rock") {
      player++;
      return "You win! Paper beats Rock";
    } else if (comp === "scissors") {
      computer++;
      return "You lose! Scissors beat Paper";
    } else {
      return "Tie! Go again!"
    }
  } else if (choice === "scissors") {
    if (comp === "paper") {
      player++;
      return "You win! Scissors beat Paper";
    } else if (comp === "rock") {
      computer++;
      return "You lose! Rock beats Scissors"
    } else {
      return "Tie! Go again!"
    }
  }
}

let player = 0;
let computer = 0;

function game() {
  player = 0;
  computer = 0
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose your weapon");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player: ${player}; Computer: ${computer}`)
  }
  if (player > computer) {
    return `You win! ${player} to ${computer}`;
  } else if (computer > player) {
    return `Computer wins! ${computer} to ${player}`;
  } else {
    return `Tie game! ${player} all!`;
  }
}

console.log(game());