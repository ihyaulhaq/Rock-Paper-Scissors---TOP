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

// document.getElementById("comp_c").innerHTML += `computer choice is <b>${getComputerChoice()} !!</b>`;
