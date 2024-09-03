const gameBoard = document.querySelector('.game-board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(event) {
    const cellIndex = event.target.dataset.cellIndex;
    if (gameState[cellIndex] === '') {
        gameState[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWinningCondition();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinningCondition() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        if (
            gameState[combination[0]] !== '' &&
            gameState[combination[0]] === gameState[combination[1]] &&
            gameState[combination[0]] === gameState[combination[2]]
        ) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
            return;
        }
    }
}

function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    cells.forEach((cell) => (cell.textContent = ''));
    currentPlayer = 'X';
}

cells.forEach((cell) => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
