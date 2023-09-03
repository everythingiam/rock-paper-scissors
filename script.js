function getComputerChoice(){ //Random number [1, 3] for computer selection.
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

function playRound(playerSelection, computerSelection){ 
    //If player wins - returns 1, if loses - returns 2, if draw - 3. For printing right messages in outMessages().
    if (playerSelection == computerSelection){
        return 3;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
        return 1;
    } else return 2;
}

function outMessages(playerSelection, computerSelection){
    let roundResult = playRound(playerSelection, computerSelection);
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

function game(){ 
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerWeapon = prompt("Write in your weapon");
        playerSelection = playerWeapon.toLowerCase();
        if (playRound(playerSelection, computerSelection) == 1){
            playerScore++;
        }
        if (playRound(playerSelection, computerSelection) == 2){
            computerScore++;
        }
        console.log(outMessages(playerSelection, computerSelection));
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