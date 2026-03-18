let humanScore = 0;
let computerScore = 0;
let gameOver = false;
let lastRoundWinner = "";

const scoreboard = document.querySelector("#resultScreen");
const scores = document.createElement("p");
const winner = document.createElement("p");

const playerCard = document.querySelector("#playerCard");
const computerCard = document.querySelector("#computerCard");
const playerPick = document.querySelector("#playerPick");
const computerPick = document.querySelector("#computerPick");
const playerIcon = document.querySelector("#playerIcon");
const computerIcon = document.querySelector("#computerIcon");

const retryBtn = document.querySelector("#retryBtn");
const choiceButtons = document.querySelectorAll(".choicebtn");

scoreboard.append(winner, scores);
scores.textContent = "Player Score: 0 | Computer: 0";

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let player = "";

document.querySelectorAll(".choicebtn").forEach(button => {
    button.addEventListener("click", (e) => {
        if (gameOver) return;

        player = e.target.innerText.toLowerCase();
        let computer = getComputerChoice();

        playRound(player, computer);

        document.querySelectorAll(".choicebtn").forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        playerCard.className = "battleCard";
        computerCard.className = "battleCard";

        playerPick.textContent = player;
        computerPick.textContent = computer;

        if (player === "rock") {
            playerIcon.textContent = "🪨";
        } else if (player === "paper") {
            playerIcon.textContent = "📄";
        } else {
            playerIcon.textContent = "✂️";
        }

        if (computer === "rock") {
            computerIcon.textContent = "🪨";
        } else if (computer === "paper") {
            computerIcon.textContent = "📄";
        } else {
            computerIcon.textContent = "✂️";
        }

        if (lastRoundWinner === "player") {
            playerCard.classList.add("win");
            computerCard.classList.add("lose");
        } else if (lastRoundWinner === "computer") {
            computerCard.classList.add("win");
            playerCard.classList.add("lose");
        } else {
            playerCard.classList.add("draw");
            computerCard.classList.add("draw");
        }

        if (computerScore === 5) {
            gameOver = true;
            winner.textContent = "Computer won... try again";
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
            choiceButtons.forEach(btn => btn.disabled = true);
        } else if (humanScore === 5) {
            gameOver = true;
            winner.textContent = "Player won!!! Nice job!";
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
            choiceButtons.forEach(btn => btn.disabled = true);
        } else {
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
        }
    });
});

function playRound(player, computer) {
    if (player === computer) {
        winner.textContent = "Draw...";
        lastRoundWinner = "draw";
        return computerScore;
    } else if (
        player == "rock" && computer == "scissors" ||
        player == "paper" && computer == "rock" ||
        player == "scissors" && computer == "paper"
    ) {
        winner.textContent = "Player scores! " + player + " beats " + computer + "!!";
        humanScore++;
        lastRoundWinner = "player";
        return humanScore;
    } else {
        winner.textContent = "Computer scores! " + computer + " beats " + player;
        computerScore++;
        lastRoundWinner = "computer";
        return computerScore;
    }
}

retryBtn.addEventListener("click", function () {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    lastRoundWinner = "";

    winner.textContent = "";
    scores.textContent = "Player Score: 0 | Computer: 0";

    choiceButtons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("active");
    });

    playerCard.className = "battleCard hidden";
    computerCard.className = "battleCard hidden";

    playerPick.textContent = "Waiting...";
    computerPick.textContent = "Waiting...";
    playerIcon.textContent = "❔";
    computerIcon.textContent = "❔";
});