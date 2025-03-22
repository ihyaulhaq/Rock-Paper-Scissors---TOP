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

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log("round " + (i + 1));
    if (
      humanSelection === "rock" ||
      humanSelection === "scissors" ||
      humanSelection === "paper"
    ) {
      console.log("your choice " + humanSelection);
    } else {
      console.log(`Please input valid text`);
    }
    console.log("comp choice " + computerSelection);
    console.log("your score = " + humanScore);

    console.log("comp score = " + computerScore);
  }

  if (humanScore > computerScore) {
    console.log("YOU WIN !!");
  } else {
    console.log("YOU LOSE !!");
  }
}

// playGame();
