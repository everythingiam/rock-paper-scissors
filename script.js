const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');
const weaponsList = document.querySelector('.choices');
const myHand = document.querySelector('.my-img');
const enemyHand = document.querySelector('.enemy-img');
let sec = document.querySelector('section');
let scorePlayer = document.querySelector('.scorePlayer');
let scoreComputer = document.querySelector('.scoreComputer');
const myColored = document.querySelector('.my-colored-field');
const enemyColored = document.querySelector('.enemy-colored-field');
const result = document.createElement('div');

const roundsNumber = 5;
const buttons = document.querySelectorAll('button');


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
    if (playerSelection == computerSelection){
        return "draw";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
        return "win";
    } else return "lose";
}

function showComputerChoice(computerWeapon){
    enemyHand.src=`assets/enemy-${computerWeapon}.png`;
}

function faded(timeout){
    sec.setAttribute('style', 'grid-template-columns: 6fr 1fr 6fr;');

    setTimeout(() => {
        buttons.forEach(elem => elem.removeAttribute('style', 'display'));
        sec.setAttribute('style', 'grid-template-columns: repeat(3, 1fr);');
        myHand.src='assets/my-rock.png';
        enemyHand.src='assets/enemy-rock.png';
    }, timeout);
    
}

function weaponListener(weapon){
    myHand.src=`assets/my-${weapon}.png`;
}


function score(playerSelection, computerSelection){
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    console.log("player - ", playerSelection, " computer - ", computerSelection)
    if (roundResult == "win"){
        countPlayer++;
        scorePlayer.textContent = countPlayer;
        // myColored.removeAttribute('style', 'display');
        return;
    }
    else if (roundResult == "lose"){
        countComputer++;
        scoreComputer.textContent = countComputer;
         return;
    }  
}
let countPlayer = 0;
let countComputer = 0;  

function startGame(playerSelection){ //метод запуска
    weaponListener(playerSelection);

    let computerSelection = getComputerChoice();
    showComputerChoice(computerSelection);

    const timeout = 1500;
    buttons.forEach(elem => elem.setAttribute('style', 'display: none;'));
    faded(timeout);

    score(playerSelection, computerSelection);

    
    if (countPlayer == roundsNumber || countComputer == roundsNumber){
        restart(timeout);
        
        if (countPlayer > countComputer){
            showWinner(timeout, 'ПОБЕДА');
        } else{
            showWinner(timeout, 'ПОРАЖЕНИЕ');
        }
        return;
    }

}
function showWinner(timeout, status){
    setTimeout(() => {
        document.querySelector('section').appendChild(result);
        result.className = 'result';
        result.textContent = status;
    }, timeout);
}

function restart(timeout){
    buttons.forEach(elem => elem.remove());
    var restartButton = document.createElement('button');
    restartButton.innerText = 'RESTART';

    setTimeout(() => {
        weaponsList.appendChild(restartButton);
    }, timeout);
    
    restartButton.addEventListener('click', () => {
        countComputer = 0;
        countPlayer = 0;
        scorePlayer.textContent = 0;
        scoreComputer.textContent = 0;
        restartButton.remove();
        result.remove();
        buttons.forEach(elem => weaponsList.appendChild(elem));
    })
    return;

}

playerRock.addEventListener('click', () => {
    startGame("rock");
});
playerPaper.addEventListener('click', () => {
    startGame("paper")
});
playerScissors.addEventListener('click', () => {
    startGame("scissors")
});
