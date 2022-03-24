var wins = 0;
var userOption;
choices = ["rock", "paper", "scissor"];
var computerSelection;
function count() {
  wins += 1;
  return wins;
}
var image = document.getElementById("images");
// var computerImage = document.querySelector(".computer-image");
var result = document.getElementById("score-card");
let score = document.getElementById("score");

//get the user option//
var userChoice = document.querySelectorAll(".choices");
userChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    userOption = choice.value;

    playRound(choice.value);
    imagePlayerChange(choice);
    computerImageChange(computerSelection);
  });
});

//changing player image on each selection
function imagePlayerChange(opt) {
  if (userOption == "rock") {
    image.children[0].setAttribute("src", "./assets/images/rock.png");
  } else if (userOption == "paper") {
    image.children[0].setAttribute("src", "./assets/images/paper.png");
  } else {
    image.children[0].setAttribute("src", "./assets/images/scissors.png");
  }
}
//changing computer image on each selction
function computerImageChange(oopt) {
  if (computerSelection == "rock") {
    image.children[1].setAttribute("src", "./assets/images/rock.png");
  } else if (computerSelection == "paper") {
    image.children[1].setAttribute("src", "./assets/images/paper.png");
  } else {
    image.children[1].setAttribute("src", "./assets/images/scissors.png");
  }
}
//compare two options//
function playRound(playerSelection) {
  computerSelection = choices[Math.floor(Math.random() * 3)];
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    result.children[0].innerHTML = "Player Wins";
    count();
  } else if (playerSelection == computerSelection) {
    result.children[0].innerHTML = "it's a tie";
  } else {
    result.children[0].innerHTML = "computer wins";
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
  // prompt(`total player wins is ${wins} and computer wins ${5 - wins}`);
  // var playAgain = prompt("play again?? (Y/N) or (y/n)").toLowerCase();
  // if (playAgain == "y") {
  //   gameStart();
  // } else {
  //   prompt("Thankyou for playing");
  // }
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
