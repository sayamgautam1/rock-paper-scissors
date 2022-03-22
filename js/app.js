var wins = 0;
var userOption;
function count() {
  wins += 1;
  return wins;
}

//get the user option//
var userChoice = document.querySelectorAll(".choices");
userChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    playRound(choice.value);
  });
});

// get the computer option //
choices = ["rock", "paper", "scissor"];

//compare two options//
// playRound(userOption);
function playRound(playerSelection) {
  var computerSelection = choices[Math.floor(Math.random() * 3)];
  if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    console.log("player wins");
    count();
  } else if (playerSelection == computerSelection) {
    console.log("it's a tie");
  } else {
    console.log("computer wins");
  }
}
// playRound("rock", computerChoice);

// function game() {
//   var computerChoice = choices[Math.floor(Math.random() * 3)];
//   console.log(computerChoice);
//   var playerChoice = prompt(
//     "please enter rock, paper or scissor"
//   ).toLowerCase();
//   playRound(playerChoice, computerChoice);
// }

function playTimes() {
  for (i = 0; i < 5; i++) {
    game();
  }
  prompt(`total player wins is ${wins} and computer wins ${5 - wins}`);
  var playAgain = prompt("play again?? (Y/N) or (y/n)").toLowerCase();
  if (playAgain == "y") {
    gameStart();
  } else {
    prompt("Thankyou for playing");
  }
}

// var playAgain = prompt("Start the game (Y/N) or (y/n)").toLowerCase();
function gameStart() {
  var playAgain = prompt("Start the game (Y/N) or (y/n)").toLowerCase();
  if (playAgain == "y") {
    playTimes();
  } else {
    prompt("Thankyou for playing");
  }
}

// gameStart();
