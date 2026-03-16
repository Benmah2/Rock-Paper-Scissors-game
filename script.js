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

let player = "";

document.querySelectorAll(".choicebtn").forEach(button => {
    button.addEventListener("click", (e) => {
        player = e.target.innerText.toLowerCase();
        let computer = getComputerChoice();

        playRound(player, computer);

        if (computerScore === 5) {
            winner.textContent = "Computer won... try again";
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
        } else if (humanScore === 5) {
            winner.textContent = "Player won!!! Nice job!";
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
        } else {
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
        }
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
        winner.textContent = "Player scores! " + player + " beats " + computer + "!!";
        humanScore++;
    } else {
        winner.textContent = "Computer scores! " + computer + " beats " + player;
        computerScore++;
    }
}