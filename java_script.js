function getComputerChoice() {
  let random_choice = Math.floor(Math.random() * 3);
  let choice = "";

  if (random_choice === 0) {
    choice = "rock";
  } else if (random_choice === 1) {
    choice = "scissors";
  } else {
    choice = "paper";
  }
  return choice;
}

function getHumanChoice() {
  let player_input = prompt("rock paper or scissors ?").toLowerCase();

  if (
    player_input === "rock" ||
    player_input === "scissors" ||
    player_input === "paper"
  ) {
    document.getElementById(
      "player_input_txt"
    ).innerHTML += `Your choice is <b>${player_input} !!</b>`;
  } else {
    document.getElementById(
      "player_input_txt"
    ).innerHTML += `Please input valid text`;
  }

  return player_input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("DRAW");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(humanSelection);
console.log(computerScore);
console.log(computerSelection);

// document.getElementById("comp_c").innerHTML += `computer choice is <b>${getComputerChoice()} !!</b>`;
