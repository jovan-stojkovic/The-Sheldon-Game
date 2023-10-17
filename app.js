let computerMove = "";
const info = document.getElementById("info");
info.innerHTML = "Just wait...";

const myMove = document.getElementById("my-move");
myMove.innerHTML = "My move is...";

const compMove = document.getElementById("comp-move");
compMove.innerHTML = "The Computer's move is...";

function getComputerMove() {
  let randomNumber = Math.random();

  if (randomNumber < 0.2) {
    computerMove = "rock";
  } else if (randomNumber < 0.4) {
    computerMove = "paper";
  } else if (randomNumber < 0.6) {
    computerMove = "scissors";
  } else if (randomNumber < 0.8) {
    computerMove = "lizard";
  } else if (randomNumber < 1) {
    computerMove = "spock";
  }

  return computerMove;
}

const moveRock = document.getElementById("rock");
moveRock.addEventListener("click", function () {
  getComputerMove();
  console.log(computerMove);

  if (computerMove === "rock") {
    info.innerHTML = `It's a tie! Try again...`;
  } else if (computerMove === "paper") {
    info.innerHTML = `Paper covers Rock. You Lose!`;
  } else if (computerMove === "scissors") {
    info.innerHTML = `...and as it always has: Rock crushes Scissors. You Win!`;
  } else if (computerMove === "lizard") {
    info.innerHTML = `Rock crushes Lizard. You Win!`;
  } else {
    info.innerHTML = `Spock vaporizes Rock. You Lose!`;
  }

  myMove.innerHTML = "rock";
  compMove.innerHTML = computerMove;
});

const movePaper = document.getElementById("paper");
movePaper.addEventListener("click", function () {
  getComputerMove();
  console.log(computerMove);

  if (computerMove === "rock") {
    info.innerHTML = `Paper covers Rock. You Win!`;
  } else if (computerMove === "paper") {
    info.innerHTML = `It's a tie! Try again...`;
  } else if (computerMove === "scissors") {
    info.innerHTML = `Scissors cuts Paper. You Lose!`;
  } else if (computerMove === "lizard") {
    info.innerHTML = `Lizard eats Paper. You Lose!`;
  } else {
    info.innerHTML = `Paper disproves Spock. You Win!`;
  }

  myMove.innerHTML = "paper";
  compMove.innerHTML = computerMove;
});

const moveScissors = document.getElementById("scissors");
moveScissors.addEventListener("click", function () {
  getComputerMove();
  console.log(computerMove);

  if (computerMove === "rock") {
    info.innerHTML = `...and as it always has: Rock crushes Scissors. You Lose!`;
  } else if (computerMove === "paper") {
    info.innerHTML = `Scissors cuts Paper. You Win!`;
  } else if (computerMove === "scissors") {
    info.innerHTML = `It's a tie! Try again...`;
  } else if (computerMove === "lizard") {
    info.innerHTML = `Scissors decapitates Lizard. You Win!`;
  } else {
    info.innerHTML = `Spock smashes Scissors. You Lose!`;
  }

  myMove.innerHTML = "scissors";
  compMove.innerHTML = computerMove;
});

const moveLizard = document.getElementById("lizard");
moveLizard.addEventListener("click", function () {
  getComputerMove();
  console.log(computerMove);

  if (computerMove === "rock") {
    info.innerHTML = `Rock crushes Lizard. You Lose!`;
  } else if (computerMove === "paper") {
    info.innerHTML = `Lizard eats Paper. You Win!`;
  } else if (computerMove === "scissors") {
    info.innerHTML = `Scissors decapitates Lizard. You Lose!`;
  } else if (computerMove === "lizard") {
    info.innerHTML = `It's a tie! Try again...`;
  } else {
    info.innerHTML = `Lizard poisons Spock. You Win!`;
  }

  myMove.innerHTML = "lizard";
  compMove.innerHTML = computerMove;
});

const moveSpock = document.getElementById("spock");
moveSpock.addEventListener("click", function () {
  getComputerMove();
  console.log(computerMove);

  if (computerMove === "rock") {
    info.innerHTML = `Spock vaporizes Rock. You Win!`;
  } else if (computerMove === "paper") {
    info.innerHTML = `Paper disproves Spock. You Lose!`;
  } else if (computerMove === "scissors") {
    info.innerHTML = `Spock smashes Scissors. You Win!`;
  } else if (computerMove === "lizard") {
    info.innerHTML = `Lizard poisons Spock. You Lose!`;
  } else {
    info.innerHTML = `It's a tie! Try again...`;
  }

  myMove.innerHTML = "spock";
  compMove.innerHTML = computerMove;
});
