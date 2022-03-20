var wins = 0;
function count() {
  wins += 1;
  return wins;
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissor") {
    console.log("player wins");
    count();
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("player wins");
    count();
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    console.log("player wins");
    count();
  } else if (playerSelection == computerSelection) {
    console.log("it's a tie");
  } else {
    console.log("computer wins");
  }
}
choices = ["rock", "paper", "scissor"];

function game() {
  var computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  var playerChoice = prompt(
    "please enter rock, paper or scissor"
  ).toLowerCase();
  playRound(playerChoice, computerChoice);
}
for (i = 0; i < 5; i++) {
  game();
}
prompt(`total player wins is ${wins} and computer wins ${5 - wins}`);

function playAgainCommand() {
  for (i = 0; i < 5; i++) {
    game();
  }
  prompt(`total player wins is ${wins} and computer wins ${5 - wins}`);
  var playAgain = prompt("play again? (Y/N) or (y/n)").toLowerCase();
  if (playAgain == "y") {
    playAgainCommand();
  } else {
    prompt("Thankyou for playing");
  }
}

var playAgain = prompt("play again? (Y/N) or (y/n)").toLowerCase();
if (playAgain == "y") {
  playAgainCommand();
} else {
  prompt("Thankyou for playing");
}
