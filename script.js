const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('game-board');
const winningMessageTextElement = document.getElementById('winning-message-text');
const winningMessageElement = document.getElementById('winning-message');
const restartButton = document.getElementById('restart-button');
const alternateModeButton = document.getElementById('alternate-mode-button');
const botModeButton = document.getElementById('bot-mode');
const playerModeButton = document.getElementById('player-mode');
let currentPlayer = 'X';
let vsBot = false;
let xMoves = [];
let oMoves = [];
const MAX_MOVES = 3;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function initialize() {
    board.classList.add('hidden');
}

function startGame() {
    cells.forEach(cell => {
        cell.classList.remove('X');
        cell.classList.remove('O');
        cell.innerText = '';
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    winningMessageElement.classList.remove('show');
    alternateModeButton.classList.add('hidden');
    currentPlayer = 'X';
    board.classList.remove('hidden');
    xMoves = [];
    oMoves = [];
}

function handleClick(e) {
    const cell = e.target;
    if (cell.classList.contains('X') || cell.classList.contains('O')) {
        return;
    }
    placeMark(cell, currentPlayer);
    if (checkWin(currentPlayer)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        if (vsBot && currentPlayer === 'O') {
            botMove();
        }
    }
}

function placeMark(cell, currentPlayer) {
    if (currentPlayer === 'X') {
        if (xMoves.length === MAX_MOVES) {
            const firstMove = xMoves.shift();
            clearCell(firstMove);
        }
        xMoves.push([...cells].indexOf(cell));
    } else if (currentPlayer === 'O') {
        if (oMoves.length === MAX_MOVES) {
            const firstMove = oMoves.shift();
            clearCell(firstMove);
        }
        oMoves.push([...cells].indexOf(cell));
    }
    cell.classList.add(currentPlayer);
    cell.innerText = currentPlayer;
}

function clearCell(index) {
    const cell = cells[index];
    cell.classList.remove('X', 'O');
    cell.innerText = '';
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
}

function swapTurns() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(currentPlayer) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentPlayer);
        });
    });
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${currentPlayer} Wins!`;
    }
    winningMessageElement.classList.add('show');
    suggestAlternateMode();
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('X') || cell.classList.contains('O');
    });
}

function botMove() {
    const bestMove = minimax([...cells], 'O').index;
    const cell = cells[bestMove];
    placeMark(cell, 'O');
    if (checkWin('O')) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
    }
}

// Minimax Algorithm
function minimax(newBoard, player) {
    const availableCells = newBoard.filter(cell => !cell.classList.contains('X') && !cell.classList.contains('O'));

    if (checkWin('X')) {
        return { score: -10 };
    } else if (checkWin('O')) {
        return { score: 10 };
    } else if (availableCells.length === 0) {
        return { score: 0 };
    }

    const moves = [];

    availableCells.forEach((cell, index) => {
        const move = {};
        move.index = [...cells].indexOf(cell);

        newBoard[move.index].classList.add(player);

        if (player === 'O') {
            const result = minimax(newBoard, 'X');
            move.score = result.score;
        } else {
            const result = minimax(newBoard, 'O');
            move.score = result.score;
        }

        newBoard[move.index].classList.remove(player);

        moves.push(move);
    });

    let bestMove;
    if (player === 'O') {
        let bestScore = -Infinity;
        moves.forEach((move, i) => {
            if (move.score > bestScore) {
                bestScore = move.score;
                bestMove = i;
            }
        });
    } else {
        let bestScore = Infinity;
        moves.forEach((move, i) => {
            if (move.score < bestScore) {
                bestScore = move.score;
                bestMove = i;
            }
        });
    }

    return moves[bestMove];
}

restartButton.addEventListener('click', startGame);

botModeButton.addEventListener('click', () => {
    vsBot = true;
    document.getElementById('mode-selection').classList.add('hidden');
    startGame();
});

playerModeButton.addEventListener('click', () => {
    vsBot = false;
    document.getElementById('mode-selection').classList.add('hidden');
    startGame();
});

function suggestAlternateMode() {
    alternateModeButton.classList.remove('hidden');
    alternateModeButton.innerText = vsBot ? 'Play with 2 Players' : 'Play with Bot';
    alternateModeButton.onclick = () => {
        vsBot = !vsBot;
        alternateModeButton.classList.add('hidden');
        startGame();
    };
}
function botMove() {
    const bestMove = minimax([...cells], 'O').index;
    setTimeout(() => {
        const cell = cells[bestMove];
        placeMark(cell, 'O');
        if (checkWin('O')) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
        }
    }, 1000); 
}


initialize();
