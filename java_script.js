let humanScore = 0;
let computerScore = 0;
let usrChoice;

const usrScissors = document.querySelector("#scissorsBtn");
const usrRock = document.querySelector("#rockBtn");
const usrPaper = document.querySelector("#paperBtn");

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function playGame() {
  const compSelect = document.querySelector("#compSelect");
  const usrSelect = document.querySelector("#usrSelect");
  usrPaper.addEventListener("click", () => {
    usrChoice = "paper";
    let computerSelection = getComputerChoice();
    playRound(usrChoice, computerSelection);
  });
  usrRock.addEventListener("click", () => {
    usrChoice = "rock";
    let computerSelection = getComputerChoice();
    playRound(usrChoice, computerSelection);
  });
  usrScissors.addEventListener("click", () => {
    usrChoice = "scissors";
    let computerSelection = getComputerChoice();
    playRound(usrChoice, computerSelection);
  });
}
playGame();

function playRound(humanChoice, computerChoice) {
  const currentCondition = document.querySelector("#currentCondition");

  const usrScoreTxt = document.querySelector("#usrScoreTxt");
  const compScoreTxt = document.querySelector("#compScoreTxt");

  const compSelect = document.querySelector("#compSelect");
  const usrSelect = document.querySelector("#usrSelect");

  usrScoreTxt.textContent = "your score is ";
  compScoreTxt.textContent = "computer score is ";
  compSelect.textContent = "computer ";
  usrSelect.textContent = "you ";
  currentCondition.textContent = "currently ";

  if (humanChoice === computerChoice) {
    // console.log("DRAW");
    currentCondition.textContent += "TIE";
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    humanScore += 1;
    currentCondition.textContent += "YOU WINN";
  } else {
    computerScore += 1;
    currentCondition.textContent += "YOU LOSE";
  }

  if (humanScore === 5) {
    alert("you win !!!");
    humanScore = 0;
    computerScore = 0;
  }
  if (computerScore === 5) {
    alert("you LOSEE!!!");
    humanScore = 0;
    computerScore = 0;
  }

  usrScoreTxt.textContent += humanScore;
  compScoreTxt.textContent += computerScore;

  compSelect.textContent += computerChoice;
  usrSelect.textContent += humanChoice;
}
