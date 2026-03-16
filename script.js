let humanScore = 0;
let computerScore = 0;

const scoreboard = document.querySelector("#resultScreen");
const scores = document.createElement("p");
const winner = document.createElement("p");

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

document.querySelectorAll(".choicebtn").forEach(button => {
    button.addEventListener("click", function () {
        let player = button.textContent.toLowerCase();
        let computer = getComputerChoice();

        playRound(player, computer);

        document.querySelectorAll(".choicebtn").forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        if (computerScore === 5) {
            winner.textContent = "Computer won... try again";
        } else if (humanScore === 5) {
            winner.textContent = "Player won!!! Nice job!";
        }

        scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
    });
});

function playRound(player, computer) {
    if (player === computer) {
        winner.textContent = "Draw...";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        humanScore++;
        winner.textContent = "Player scores! " + player + " beats " + computer + "!!";
    } else {
        computerScore++;
        winner.textContent = "Computer scores! " + computer + " beats " + player;
    }
}