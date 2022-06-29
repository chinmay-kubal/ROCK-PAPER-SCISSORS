const choices = ["Rock", "Paper", "Scissors"];
const displayData = document.querySelector("#output");

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerPlay) {
  let computerSelection = computerPlay();
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player wins";
  } else {
    return "computer wins";
  }
}

function game() {
  let data = [];
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt("Enter the Value", "");
    data.push(playRound(playerSelection, computerPlay));
  }
  console.log(data);
  displayData.innerHTML = data.map((output) => output + " " + "<br />");
}
game();
