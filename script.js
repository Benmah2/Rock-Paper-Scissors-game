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

function getHumanChoice() {
    let user = prompt("Please chose between Rock, Paper or Scissors").toLowerCase();
    
    if (user == "rock" ){
        player = user;
        return player
    } else if (user == "paper") {
        player = user;
        return player
    } else if (user == "scissors") {
        player = user;
        return player
    } else {
        return "Wrong!";
    }
        
}
let humanScore = 0;
let computerScore = 0;

player = "";

function playRound(humanChoice, computerChoice) {


}


console.log(getHumanChoice())
console.log(getComputerChoice());
console.log(playRound())
console.log(humanScore);
console.log(player);
console.log(computer);