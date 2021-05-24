const game = () => {
	let playerScore = 0;
	let computerScore = 0;

	const startGame = () => {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const matchScreen = document.querySelector(".match");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			matchScreen.classList.add("fadeIn");
			console.log(introScreen);
			console.log(matchScreen);
			console.log(playBtn);
		});
	};

	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		const hands = document.querySelectorAll(".hands img");

		hands.forEach((hand) => {
			hand.addEventListener("animationend", function () {
				this.style.animation = "";
			});
		});

		const computerOptions = ["rock", "paper", "scissors"];

		options.forEach((option) => {	
			option.addEventListener("click", function () {
				console.log(this);
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				console.log(computerChoice);

				console.log(option.textContent);

				setTimeout(() => {
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
					compareHands(option.textContent, computerChoice);
				}, 2000);

				playerHand.style.animation = "shakePlayer 2s ease";
				computerHand.style.animation = "shakeComputer 2s ease";

                playerHand.src = "./assets/rock.png";
                computerHand.src = "./assets/rock.png"
			});
		});
	};

	const updateScore = () => {
		const playerScoreText = document.querySelector(".player-score p");
		const computerScoreText = document.querySelector(".computer-score p");

		playerScoreText.textContent = playerScore;
		computerScoreText.textContent = computerScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
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
			}
			updateScore();

			return;
		}
	};

	startGame();
	playMatch();
};

game();
console.log("fine");
