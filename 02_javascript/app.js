document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const symbolSelectionPage = document.getElementById('symbol-selection-page');
    const gamePage = document.getElementById('game-page');
    const startBtn = document.getElementById('start-btn');
    const chooseXBtn = document.getElementById('choose-x');
    const chooseOBtn = document.getElementById('choose-o');
    const boxes = document.querySelectorAll('.box');
    const resetBtn = document.getElementById('reset-btn');
    let board = ["", "", "", "", "", "", "", "", ""];
    let playerSymbol = "X";
    let turnO = true;

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWin = (player) => {
        return winPatterns.some(pattern => {
            return pattern.every(index => {
                return board[index] === player;
            });
        });
    };

    const checkDraw = () => {
        return board.every(box => box !== "");
    };

    const highlightWinningBoxes = (pattern) => {
        pattern.forEach(index => {
            boxes[index].classList.add('winning');
        });
    };

    const handleClick = (box, index) => {
        if (box.innerText === "") {
            box.innerText = turnO ? "O" : "X";
            board[index] = turnO ? "O" : "X";
            if (checkWin(turnO ? "O" : "X")) {
                const winningPattern = winPatterns.find(pattern => pattern.every(i => board[i] === (turnO ? "O" : "X")));
                highlightWinningBoxes(winningPattern);
                setTimeout(() => alert(`${turnO ? "O" : "X"} wins!`), 10);
                setTimeout(resetGame, 1000);
            } else if (checkDraw()) {
                setTimeout(() => alert("It's a draw!"), 10);
                setTimeout(resetGame, 1000);
            } else {
                turnO = !turnO; 
            }
        }
    };

    const resetGame = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        boxes.forEach(box => {
            box.innerText = "";
            box.classList.remove('winning');
        });
        turnO = true;
    };

    const startGame = (symbol) => {
        playerSymbol = symbol;
        turnO = symbol === "O";
        symbolSelectionPage.style.display = 'none';
        gamePage.style.display = 'flex';
        boxes.forEach(box => box.innerText = ""); // Reset boxes
        board = ["", "", "", "", "", "", "", "", ""]; // Reset board
    };

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => handleClick(box, index));
    });

    resetBtn.addEventListener('click', resetGame);

    startBtn.addEventListener('click', () => {
        landingPage.style.display = 'none';
        symbolSelectionPage.style.display = 'flex';
    });

    chooseXBtn.addEventListener('click', () => startGame("X"));

    chooseOBtn.addEventListener('click', () => startGame("O"));
});
