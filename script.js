function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1){
        return "rock";
    }
    if (choice === 2){
        return "paper";
    }
    if (choice === 3){
        return "scissors";
    }
}
// let computerSelection = getComputerChoice();
// let playerSelection = "rock";
function round(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 3;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")){
        return 1;
    } else return 2;
}

function messages(playerSelection, computerSelection){
    let roundResult = round(playerSelection, computerSelection);
    let message = "";
    switch(roundResult){
        case 1:
            message = "You win! " + playerSelection + " beats " + computerSelection;
            break;
        case 2:
            message = "You lose! " + computerSelection + " beats " + playerSelection;
            break;
        case 3:
            message = "Draw!";
            break;
    }
    return message;
}
// console.log("player: " + playerSelection)
// console.log("computer: " + computerSelection)
// console.log(messages(playerSelection, computerSelection, roundResult));

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let weapon = prompt("Write in your weapon");
        playerSelection = weapon.toLowerCase();
        if (round(playerSelection, computerSelection) == 1){
            playerScore++;
        }
        if (round(playerSelection, computerSelection) == 2){
            computerScore++;
        }
        console.log(messages(playerSelection, computerSelection));
        console.log("player - " + playerScore + " computer - " + computerScore);
    }
    if (playerScore > computerScore){
        console.log("You won the whole game genius");
    }
    else if (playerScore < computerScore) {
        console.log("You lost to the computer bruh");
    }
    else if (playerScore == computerScore){
        console.log("You r as smart as this machine");
    }
}
game();