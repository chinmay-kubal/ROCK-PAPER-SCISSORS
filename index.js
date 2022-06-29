const choices = ["Rock", "Paper", "Scissors"];

const displayData = document.querySelector("#output");

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = computerPlay();
// let playerSelection = window.prompt("Enter the Value", "");

function playRound(playerSelection, computerSelection) {
  // your code here!
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
// const playerSelection = "paper";
// console.log(playRound(playerSelection, computerSelection));

function game() {
  let data = [];
  for (let i = 0; i < 5; i++) {
    // your code here!
    let playerSelection = window.prompt("Enter the Value", "");
    data.push(playRound(playerSelection, computerSelection));
  }
  console.log(data);
  displayData.innerHTML = data.map((output) => output + " " + "<br />");
}
game();
