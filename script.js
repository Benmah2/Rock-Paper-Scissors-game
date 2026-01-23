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

console.log(getComputerChoice());