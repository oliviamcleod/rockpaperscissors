//if player clicks rock, store rock
//generate computer move
//if player clicks paper, store rock
//generate computer move
//if player clicks scissors, store rock
//generate computer move
//compare the two and decide winner
//Tell player what computer move was
//Tell player who won

// if player wins, player tally increases by 1

//Take in a username (input field)
//Store the username as a variable when the player presses enter
//Display username at the top of the page.
//Display it by the scores
//

let gameHistory = [];

const submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", displayPlayerName);

function displayPlayerName() {
  const input = document.getElementById("username-input");
  const display = document.getElementById("username-display");

  //if input is valid, print the name.
  //if input is invalid, print 'ERROR,

  if (input.value) {
    display.innerText = "Hey " + input.value + " !";
  } else {
    display.innerText = "Hey, who are you?";
  }
}

const rockbtn = document.getElementById("rock");
rockbtn.addEventListener("click", playRock);

const paperbtn = document.getElementById("paper");
paperbtn.addEventListener("click", playPaper);

const scissorsbtn = document.getElementById("scissors");
scissorsbtn.addEventListener("click", playScissors);

let playerscore = 0;

let computerscore = 0;

function playRock() {
  playTheGame("rock");
}
function playScissors() {
  playTheGame("scissors");
}
function playPaper() {
  playTheGame("paper");
}

function showResult(resultMessage) {
  const result = document.getElementById("result");
  result.innerText = resultMessage;
}

function showCPUMove(x) {
  const movePlayedByCPU = document.getElementById("cpu-move");
  movePlayedByCPU.innerText = x;
}

function generatecomputerMove() {
  const randomNumber = Math.random();

  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function drawHistory() {
  const historyElement = document.getElementById("history-list");
  let displayString = "";
  for (let i = 0; i < gameHistory.length; i++) {
    displayString +=
      "<li>" +
      gameHistory[i].playerMove +
      " vs " +
      gameHistory[i].cpuMove +
      "</li>";
  }
  historyElement.innerHTML = displayString;
}

function playTheGame(playerMove) {
  const cpuMove = generatecomputerMove();
  showCPUMove(cpuMove);

  if (cpuMove === "rock") {
    if (playerMove === "rock") {
      showResult("it's a draw");
    } else if (playerMove === "paper") {
      playerscore++;
      showResult("you win!");
    } else if (playerMove === "scissors") {
      computerscore++;
      showResult("you lose!");
    }
  } else if (cpuMove === "paper") {
    if (playerMove === "rock") {
      computerscore++;
      showResult("you lose!");
    } else if (playerMove === "paper") {
      showResult("its a draw");
    } else if (playerMove === "scissors") {
      playerscore++;
      showResult("you win!");
    }
  } else if (cpuMove === "scissors") {
    if (playerMove === "rock") {
      playerscore++;
      showResult("you win!");
    } else if (playerMove === "paper") {
      computerscore++;
      showResult("you lose!");
    } else if (playerMove === "scissors") {
      showResult("it's a draw");
    }
  }
  document.getElementById("player-score").innerText = playerscore;
  document.getElementById("cpu-score").innerText = computerscore;

  let gameChoices = {
    playerMove,
    cpuMove
  };

  gameHistory.push(gameChoices);
  drawHistory();
}

//If showResult is 'you win', add 1 to Player score,
//If showResult is 'you lose', add 1 to Computer score,
//If showResult is 'it's a draw', do not change scores,
//If player score reaches 5, announce 'Champion'  and end game,
//If computer score reaches 5, announce 'Loser' and end game.
