
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(player, computer) {
    if (player === computer) return "It's a draw!";
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        playerScore++;
        return `You win! ${capitalize(player)} beats ${capitalize(computer)}.`;
    } else {
        computerScore++;
        return `You lose! ${capitalize(computer)} beats ${capitalize(player)}.`;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateScore() {
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const playerChoice = btn.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const resultText = getResult(playerChoice, computerChoice);
        document.getElementById('result').textContent = `You chose ${capitalize(playerChoice)}. Computer chose ${capitalize(computerChoice)}. ${resultText}`;
        updateScore();
    });
});

document.getElementById('reset').addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('result').textContent = 'Make your move!';
});