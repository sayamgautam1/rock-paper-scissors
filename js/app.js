function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissor") {
    console.log("player wins");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("player wins");
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    console.log("player wins");
  } else if (playerSelection == computerSelection) {
    console.log("it's a tie");
  } else {
    console.log("computer wins");
  }
}
choices = ["rock", "paper", "scissor"];

function game() {
  var computerChoice = choices[Math.floor(Math.random() * 3)];
  var playerChoice = prompt("please enter rock, paper or scissor");
  playRound(playerChoice, computerChoice);
}

for (i = 0; i < 5; i++) {
  game();
}
