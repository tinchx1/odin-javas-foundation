function getComputerChoice() {
    let numRandom = Math.random();
    if (numRandom < 0.33) {
        return "piedra";
    } else if (numRandom >= 0.33 && numRandom <= 0.66) {
        return "papel";
    } else {
        return "tijera";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerValue = playerSelection.toLowerCase();
    if (playerValue == "piedra" && computerSelection == "papel") {
        return "Ganaste! piedra vence al papel";
    } else if (playerValue == "piedra" && computerSelection == "piedra") {
        return "Empastaste! piedra empata a piedra";
    } else if (playerValue == "piedra" && computerSelection == "tijera") {
        return "Perdiste! piedra pierde contra tijera";
    } else if (playerValue == "tijera" && computerSelection == "piedra") {
        return "Perdiste! tijera pierde contra piedra";
    } else if (playerValue == "tijera" && computerSelection == "papel") {
        return "Ganaste! tijera vence a papel";
    } else if (playerValue == "tijera" && computerSelection == "tijera") {
        return "Empastaste! tijera empata a tijera";
    } else if (playerValue == "papel" && computerSelection == "piedra") {
        return "Ganaste! papel vence a piedra";
    } else if (playerValue == "papel" && computerSelection == "papel") {
        return "Empastaste! papel empata a papel";
    } else if (playerValue == "papel" && computerSelection == "tijera") {
        return "Perdiste! papel pierde contra tijera";
    } 
}

const playerSelection = "PiEdra";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));