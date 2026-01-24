function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber <= 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "Scissors"
    }

}

function getHumanChoice() {
    let player = prompt("Please chose between Rock, Paper or Scissors") 
    
    if (player == "rock" ){
        return "Rock!"
    } else if (player == "paper") {
        return "Paper!"
    } else if (player == "scissors") {
        return "Scissors!"
    } else {
        return "Wrong!";
    }
        
}

let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoice())
console.log(getComputerChoice());