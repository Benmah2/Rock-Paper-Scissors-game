let humanScore = 0;
let computerScore = 0;

const scoreboard = document.querySelector("#resultScreen");
const scores = document.createElement("p");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber <= 0) {
        computer = "rock";
        return computer;
    } else if (randomNumber === 1) {
        computer = "paper";
        return computer
    } else {
        computer = "scissors"
        computer.toLowerCase();
        return computer;
    }

}

let player = "";


//The selector of the player
document.querySelectorAll(".choicebtn").forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        player = e.target.innerText.toLowerCase();


        if (computerScore === 5) {
            alert("computer won...")
            const winner = document.createElement("p");
            winner.textContent = "Player Score: " + (humanScore)+ " | Computer: " + (computerScore)
            scores.textContent = "Computer won... try again ";
            scoreboard.append(winner, scores);
        } else if (humanScore === 5) {
            alert("player won!!")
            const winner = document.createElement("p");
            winner.textContent = "Player Score: " + (humanScore)+ " | Computer: " + (computerScore)
            scores.textContent = "Player won!!! Nice job!";
            scoreboard.append(winner, scores);
        }
        else {
            console.log("Get to 5!" + humanScore)
            computer = getComputerChoice();
            scores.textContent = "Player Score: " + (humanScore)+ " | Computer: " + (computerScore);
            playRound(player, computer);
            scoreboard.append(scores);
            return playRound;
        }
        console.log("Human: " + humanScore)
        console.log("Computer: " + computerScore)
    })
})



function playRound(player, computer) {
    console.log(player);
    console.log(computer);

    player;
    computer;

if (player === computer){
    console.log("Draw")
    return computerScore;
} else if (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper") {
    console.log("Player wins! " + player + " beats " + computer + "!!")
    humanScore++;
    return humanScore;
} else {
    console.log("Computer wins! " + computer + " beats " + player)
    computerScore++;
    return computerScore;
}}



console.log("Player score: " + humanScore);
console.log("Computer score: " + computerScore);
