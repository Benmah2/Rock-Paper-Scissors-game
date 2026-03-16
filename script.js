let humanScore = 0;
let computerScore = 0;

const scoreboard = document.querySelector("#resultScreen");
const scores = document.createElement("p");
const winner = document.createElement("p");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber <= 0) {
        computer = "rock";
        return computer;
    } else if (randomNumber === 1) {
        computer = "paper";
        return computer;
    } else {
        computer = "scissors";
        computer.toLowerCase();
        return computer;
    }
}

let player = "";

document.querySelectorAll(".choicebtn").forEach(button => {
    button.addEventListener("click", (e) => {
        player = e.target.innerText.toLowerCase();
        computer = getComputerChoice();
        playRound(player, computer);

        if (computerScore === 5) {
            alert("computer won...");
            winner.textContent = "Computer won... try again ";
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
            scoreboard.append(winner, scores);
        } else if (humanScore === 5) {
            alert("player won!!");
            winner.textContent = "Player won!!! Nice job!";
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
            scoreboard.append(winner, scores);
        } else {
            scores.textContent = "Player Score: " + humanScore + " | Computer: " + computerScore;
            scoreboard.append(winner, scores);
        }
    });
});

function playRound(player, computer) {
    player;
    computer;

    if (player === computer) {
        winner.textContent = "Draw...";
        return computerScore;
    } else if (
        player == "rock" && computer == "scissors" ||
        player == "paper" && computer == "rock" ||
        player == "scissors" && computer == "paper"
    ) {
        winner.textContent = "Player scores! " + player + " beats " + computer + "!!";
        humanScore++;
        return humanScore;
    } else {
        winner.textContent = "Computer scores! " + computer + " beats " + player;
        computerScore++;
        return computerScore;
    }
}