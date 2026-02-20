function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)

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

        playRound()
        console.log("Human: " + humanScore)
        console.log("Computer: " + computerScore)
    })
})



let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    console.log(player);
    console.log(getComputerChoice());
    player;
    computer;
if (player === computer){
    console.log("Draw")
    playGame(player, computer)
    return (computerScore)
} else if (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper") {
    console.log("Player wins! " + player + " beats " + computer + "!!")
    humanScore++;
    playGame(player, computer)
    return humanScore;
} else {
    console.log("Computer wins! " + computer + " beats " + player)
    computerScore++;
    playGame(player, computer)
    return computerScore;
}}

function playGame(player, computer) {


}

playGame()
console.log("Player score: " + humanScore);
console.log("Computer score: " + computerScore);
