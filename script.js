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
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Write in your weapon");
        // let playerSelection = sign.toLowerCase();
        console.log(messages(playerSelection, computerSelection));
    }
}
game();