const choices = ['rock', 'paper', 'scissors'];
const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};
const shortcuts = {
    r: 'rock',
    p: 'paper',
    s: 'scissors'
};

const scoreElements = {
    player: document.querySelector('#player-score'),
    computer: document.querySelector('#computer-score'),
    draws: document.querySelector('#tie-score')
};
const roundNumber = document.querySelector('#round-number');
const resultPanel = document.querySelector('.round-result');
const resultLabel = document.querySelector('#result-label');
const resultMessage = document.querySelector('#result-message');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const playerImage = document.querySelector('#player-image');
const computerImage = document.querySelector('#computer-image');
const playerPlaceholder = document.querySelector('#player-placeholder');
const computerPlaceholder = document.querySelector('#computer-placeholder');
const moveButtons = document.querySelectorAll('.move-button');
const playAgainButton = document.querySelector('#play-again');
const winSound = new Audio('assets/win.mp3');
const loseSound = new Audio('assets/lose.mp3');

const scores = { player: 0, computer: 0, draws: 0 };
let roundsPlayed = 0;
let matchFinished = false;

function formatChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function compareMoves(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return 'draws';
    }

    return beats[playerMove] === computerMove ? 'player' : 'computer';
}

function showChoice(choice, nameElement, imageElement, placeholderElement) {
    nameElement.textContent = formatChoice(choice);
    imageElement.src = `assets/${choice}.jpg`;
    imageElement.alt = formatChoice(choice);
    imageElement.hidden = false;
    placeholderElement.hidden = true;
}

function renderScores() {
    scoreElements.player.textContent = scores.player;
    scoreElements.computer.textContent = scores.computer;
    scoreElements.draws.textContent = scores.draws;
}

function setResult(outcome, label, message) {
    resultPanel.dataset.outcome = outcome;
    resultLabel.textContent = label;
    resultMessage.textContent = message;
}

function finishMatch(winner, roundMessage) {
    matchFinished = true;
    moveButtons.forEach(button => {
        button.disabled = true;
    });

    playAgainButton.hidden = false;
    roundNumber.textContent = `MATCH COMPLETE · ROUND ${roundsPlayed}`;

    if (winner === 'player') {
        setResult('win', 'MATCH WON', `${roundMessage} You win the match!`);
        winSound.play();
    } else {
        setResult('loss', 'MATCH LOST', `${roundMessage} The computer wins the match.`);
        loseSound.play();
    }
}

function playRound(playerMove) {
    if (matchFinished) {
        return;
    }

    const computerMove = computerPlay();
    const outcome = compareMoves(playerMove, computerMove);
    const playerText = formatChoice(playerMove);
    const computerText = formatChoice(computerMove);
    roundsPlayed++;

    showChoice(playerMove, playerChoice, playerImage, playerPlaceholder);
    showChoice(computerMove, computerChoice, computerImage, computerPlaceholder);

    if (outcome === 'draws') {
        scores.draws++;
    } else {
        scores[outcome]++;
    }
    renderScores();

    const roundMessage = outcome === 'draws'
        ? `${playerText} meets ${computerText}. No points this round.`
        : outcome === 'player'
            ? `${playerText} beats ${computerText}. You take the round.`
            : `${computerText} beats ${playerText}. The computer takes the round.`;

    if (scores.player === 5 || scores.computer === 5) {
        finishMatch(scores.player === 5 ? 'player' : 'computer', roundMessage);
        return;
    }

    roundNumber.textContent = `ROUND ${roundsPlayed + 1}`;
    setResult(outcome === 'draws' ? 'draw' : outcome, outcome.toUpperCase(), roundMessage);
}

function resetMatch() {
    scores.player = 0;
    scores.computer = 0;
    scores.draws = 0;
    roundsPlayed = 0;
    matchFinished = false;

    renderScores();
    roundNumber.textContent = 'ROUND 1';
    playerChoice.textContent = 'Waiting for you';
    computerChoice.textContent = 'Ready when you are';
    playerImage.hidden = true;
    computerImage.hidden = true;
    playerPlaceholder.hidden = false;
    computerPlaceholder.hidden = false;
    playAgainButton.hidden = true;
    moveButtons.forEach(button => {
        button.disabled = false;
    });
    setResult('ready', 'READY?', 'Pick a move to play your first round.');
}

moveButtons.forEach(button => {
    button.addEventListener('click', () => playRound(button.dataset.choice));
});

document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
    }

    const choice = shortcuts[event.key.toLowerCase()];
    if (choice) {
        playRound(choice);
    }
});

playAgainButton.addEventListener('click', resetMatch);
