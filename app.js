let playerScore = 0;
let computerScore = 0;

let life = 3;

function startGame() {
  const introSection = document.querySelector(".intro-section");
  const game = document.querySelector(".game");

  introSection.classList.add("fadeOut");
  game.classList.add("fadeIn");

  playMatch();
}

function playMatch() {
  const hands = document.querySelectorAll(".hands img");

  hands.forEach((hand) => {
    hand.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });
}

function optionClick(choice) {
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  setTimeout(() => {
    const computerChoiceString = computerChoice();
    displayHand(choice, playerHand);
    displayHand(computerChoiceString, computerHand);

    compareHands(choice, computerChoiceString);
  }, 2000);

  playerHand.src =
    "https://i.ya-webdesign.com/images/rock-paper-scissors-png-17.png";
  computerHand.src =
    "https://i.ya-webdesign.com/images/rock-paper-scissors-png-17.png";

  playAimation();
}

function playAimation() {
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  playerHand.style.animation = "shakePlayer 2s ease";
  computerHand.style.animation = "shakeComputer 2s ease";
}

function computerChoice() {
  const computerOptionsArray = ["rock", "paper", "scissors"];
  const computerOptionsIndex = Math.floor(Math.random() * 3);
  const computerChoiceString = computerOptionsArray[computerOptionsIndex];

  return computerChoiceString;
}

function displayHand(choice, hand) {
  switch (choice) {
    case "rock":
      hand.src =
        "https://i.ya-webdesign.com/images/rock-paper-scissors-png-17.png";
      break;

    case "paper":
      hand.src =
        "https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/paper--left.png";
      break;

    case "scissors":
      hand.src =
        "https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/scissors--left.png";
      break;
  }
}

function compareHands(playerChoice, computerChoice) {
  const winner = document.querySelector(".winner");

  if (playerChoice === computerChoice) {
    winner.textContent = "It is a tie";
    return;
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      winner.textContent = "Player wins";
      playerScore++;
    } else {
      winner.textContent = "Computer wins";
      computerScore++;

      life--;
      checkLife();
    }
    updateScore();
    return;
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      winner.textContent = "Player wins";
      playerScore++;
    } else {
      winner.textContent = "Computer wins";
      computerScore++;

      life--;
      checkLife();
    }
    updateScore();

    return;
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      winner.textContent = "Player wins";
      playerScore++;
    } else {
      winner.textContent = "Computer wins";
      computerScore++;

      life--;
      checkLife();
    }
    updateScore();

    return;
  }
}

function checkLife() {
  const lifeOne = document.querySelector(".life-one");
  const lifeTwo = document.querySelector(".life-two");
  const lifeThree = document.querySelector(".life-three");

  if (life === 2) {
    lifeOne.classList.add("fadeOut");
  }
  if (life === 1) {
    lifeTwo.classList.add("fadeOut");
  }
  if (life === 0) {
    lifeThree.classList.add("fadeOut");
    alert("Sorry you lose!🙁\n Better luck next time🙂");

    const buttons = document.querySelectorAll(".options button");

    buttons.forEach((button) => {
      button.disabled = true;
      button.classList.add("fadeOut");
    });

    const replay = document.querySelector(".replay");
    replay.classList.add("fadeIn");
  }
}

function updateScore() {
  const playerScoreText = document.querySelector(".player-score p");
  const computerScoreText = document.querySelector(".computer-score p");

  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function replay() {
  const optionButtons = document.querySelectorAll(".options button");
  const replayButton = document.querySelector(".replay");
  const lifeImages = document.querySelectorAll(".life img");

  replayButton.classList.remove("fadeIn");
  replayButton.classList.add("fadeOut");

  optionButtons.forEach((optionButton) => {
    optionButton.disabled = false;
    optionButton.classList.add("fadeIn");
  });

  playerScore = 0;
  computerScore = 0;

  updateScore();

  lifeImages.forEach((lifeImage) => {
    lifeImage.classList.remove("fadeOut");
    lifeImage.classList.add("fadeIn");
  });

  playMatch();
}
