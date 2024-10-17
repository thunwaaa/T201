const cells = document.querySelectorAll('.cell');
const status_index = document.querySelector('.status');
let board = Array(9).fill(null);
let isXNext = true;

function checkWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function com_random(board) {
    const emptySquares = board.reduce((acc, cell, index) => {
        if (cell === null) acc.push(index);
        return acc;
    }, []);
    
    if (emptySquares.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
}

function CellClick(index) {
    if (board[index] || checkWinner(board)) return;

    board[index] = 'X';
    updateBoard();

    const winner = checkWinner(board);
    if (winner) {
        updateStatus('You Win!');
        return;
    }

    if (board.every(cell => cell !== null)) {
        updateStatus('Draw!');
        return;
    }


    setTimeout(() => {
        const com_move = com_random(board);
        board[com_move] = 'O';
        updateBoard();

        const com_win = checkWinner(board);
        if (com_win) {
            updateStatus('You Lose!');
        } else if (board.every(cell => cell !== null)) {
            updateStatus('Draw!');
        }
    }, 500);
}

function updateBoard() {
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

function updateStatus(message) {
    status_index.textContent = message;
}

cells.forEach(cell => {
    cell.addEventListener('click', () => CellClick(parseInt(cell.dataset.index)));
});

