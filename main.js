const displayStatus = document.querySelector('gameStatus');
let gameActive = true;
let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => 'Game ended in a draw!'
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

displayStatus.innerHTML = currentPlayerTurn();


const handleCellPlayed = () => {

}

const handlePlayerChange = () => {

}

const handleResultValidation = () => {

}

const handleCellClick = () => {

}

const handleRestartGame = () => {

}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.gameRestart').addEventListener('click', handleRestartGame);