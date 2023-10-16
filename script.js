const playerWeaponRock = document.querySelector('.rock');
const playerWeaponPaper = document.querySelector('.paper');
const playerWeaponScissors = document.querySelector('.scissors');
const scorePlayer = document.querySelector('.score1');
const scoreComputer = document.querySelector('.score2');
const computerHand = document.querySelector('.computerHands')
let countPlayer = 0;
let countComputer = 0;

function getComputerChoice(){ //Random number [1, 3] for computer selection.
    let choice = Math.floor(Math.random() * 3 + 1); 
    if (choice === 1){
        // const cHand = document.createElement('img');
        // cHand.classList.add('hand');
        // cHand.classList.add('top');
        // document.getElementByClassName('hand').src = "pics/камень.png";
        // computerHand.appendChild(cHand);
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

function score(playerSelection, computerSelection){
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult == 1){
        countPlayer++;
        scorePlayer.textContent = countPlayer;
        scorePlayer.classList.add('text');
        return;
    }
    if (roundResult == 2){
        countComputer++;
        scoreComputer.textContent = countComputer;
        scoreComputer.classList.add('text');
        return;
    }
}

playerWeaponRock.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    score("rock", computerChoice);
    console.log(outMessages("rock", computerChoice));
});
playerWeaponScissors.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    score("scissors", computerChoice);
    console.log(outMessages("scissors", computerChoice));
});
playerWeaponPaper.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    score("paper", computerChoice);
    console.log(outMessages("paper", computerChoice));
});