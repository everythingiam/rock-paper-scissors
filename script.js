const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');
const weaponsList = document.querySelector('.choices');
const myHand = document.querySelector('.my-img');
const enemyHand = document.querySelector('.enemy-img');
let sec = document.querySelector('section');
let scorePlayer = document.querySelector('.scorePlayer');
let scoreComputer = document.querySelector('.scoreComputer');


const result = document.createElement('div');

const roundsNumber = 3;
const buttons = document.querySelectorAll('button');

const timeout = 1500;

const imagePaths = [
    'assets/my-rock.png',
    'assets/my-paper.png',
    'assets/my-scissors.png',

    'assets/enemy-rock.png',
    'assets/enemy-paper.png',
    'assets/enemy-scissors.png',

    'assets/draw-my-rock.png',
    'assets/win-my-rock.png',
    'assets/lose-my-rock.png',

    'assets/draw-my-paper.png',
    'assets/win-my-paper.png',
    'assets/lose-my-paper.png',

    'assets/draw-my-scissors.png',
    'assets/win-my-scissors.png',
    'assets/lose-my-scissors.png',

    
    'assets/draw-enemy-rock.png',
    'assets/win-enemy-rock.png',
    'assets/lose-enemy-rock.png',

    'assets/draw-enemy-paper.png',
    'assets/win-enemy-paper.png',
    'assets/lose-enemy-paper.png',

    'assets/draw-enemy-scissors.png',
    'assets/win-enemy-scissors.png',
    'assets/lose-enemy-scissors.png',
];

const preloadImages = () => {
    imagePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
    });
};

preloadImages();


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

function faded(){
    sec.setAttribute('style', 'grid-template-columns: 6fr 1fr 6fr;');
    myHand.setAttribute('style', 'padding-left: 5%;');
    enemyHand.setAttribute('style', 'padding-left: 5%;');

    setTimeout(() => {
        buttons.forEach(elem => elem.removeAttribute('style', 'display'));
        sec.setAttribute('style', 'grid-template-columns: repeat(3, 1fr);');
        myHand.src='assets/my-rock.png';
        enemyHand.src='assets/enemy-rock.png';
        myHand.removeAttribute('style');
        enemyHand.removeAttribute('style');
    }, timeout);
    
}
function showProperAura(playerSelection, computerSelection, status){
    const myAura = document.createElement('img');
    const enemyAura = document.createElement('img');
    myAura.classList = 'my-aura';
    enemyAura.classList = 'enemy-aura';
    if (status == "draw") {
        myAura.src = `assets/draw-my-${playerSelection}.png`;
        enemyAura.src = `assets/draw-enemy-${computerSelection}.png`;
    } else if (status == "win"){
        myAura.src = `assets/win-my-${playerSelection}.png`;
        enemyAura.src = `assets/lose-enemy-${computerSelection}.png`;
    } else if (status == "lose"){
        myAura.src = `assets/lose-my-${playerSelection}.png`;
        enemyAura.src = `assets/win-enemy-${computerSelection}.png`;
    }
    document.querySelector('.my-hand').appendChild(myAura);
    document.querySelector('.enemy-hand').appendChild(enemyAura);

    setTimeout(() => {
        myAura.remove();
        enemyAura.remove();
    }, timeout)
}
function showAura(playerSelection, computerSelection){ 
    if (playerSelection == computerSelection){
        showProperAura(playerSelection, computerSelection, "draw");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
        showProperAura(playerSelection, computerSelection, "win");
    } else showProperAura(playerSelection, computerSelection, "lose");;
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

    
    buttons.forEach(elem => elem.setAttribute('style', 'display: none;'));
    faded();

    score(playerSelection, computerSelection);

    showAura(playerSelection, computerSelection);
    
    if (countPlayer == roundsNumber || countComputer == roundsNumber){
        restart();
        
        if (countPlayer > countComputer){
            showWinner('ПОБЕДА');
        } else{
            showWinner('ПОРАЖЕНИЕ');
        }
        return;
    }

}
function showWinner(status){
    setTimeout(() => {
        document.querySelector('section').appendChild(result);
        result.className = 'result';
        result.textContent = status;

        document.querySelector('.nameP').setAttribute('style', 'display: none;');
        document.querySelector('.nameC').setAttribute('style', 'display: none;');
    }, timeout);
}

function restart(){
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

        document.querySelector('.nameP').removeAttribute('style');
        document.querySelector('.nameC').removeAttribute('style');
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
