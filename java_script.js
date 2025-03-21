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

document.getElementById("comp_c").innerHTML += ` <b>${getComputerChoice()} !!</b>`;

