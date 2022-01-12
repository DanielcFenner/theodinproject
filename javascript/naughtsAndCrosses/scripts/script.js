// Factory function contains all player related attributes and functions
const Player = (name, symbol, colour) => {
    return { name, symbol, colour };
};

// TEST PLAYERS FOR DEBUGGING PURPOSES
let players = [Player("Player 1", "X", "var(--blue9)"), Player("Player 2", "O", "var(--pink9)")];

// Module controls everything related to visuals
const DisplayController = (() => {

    const sceneSwitch = (scene) => {
        const menuScene = document.querySelector(".menuScene");
        const difficultyScene = document.querySelector(".difficultyScene");
        const gameScene = document.querySelector(".gameScene");

        switch (scene) {
            case "menu":
                menuScene.style.display = "flex";
                difficultyScene.style.display = "none";
                gameScene.style.display = "none";
                break;
            case "difficulty":
                menuScene.style.display = "none";
                difficultyScene.style.display = "flex";
                gameScene.style.display = "none";
                break;
            case "game":
                menuScene.style.display = "none";
                difficultyScene.style.display = "none";
                gameScene.style.display = "flex";
                break;
        }
    };

    // Updates the game info text for the current player
    const playerRender = () => {
        const gameInfoPlayer = document.querySelector(".gameInfoPlayer");
        gameInfoPlayer.textContent = Game.currentPlayer().name + " ";
        gameInfoPlayer.style.color = Game.currentPlayer().colour;
    };

    const boardResetRender = () => {
        const cell = document.querySelectorAll(".cell");
        cell.forEach(element => element.textContent = "");
    };

    const playRender = (cell) => {
        cell.style.color = Game.currentPlayer().colour;
        cell.textContent = Game.currentPlayer().symbol;
    };

    const winRender = () => {
        const gameInfoPlayer = document.querySelector(".gameInfoPlayer");
        const gameInfoText = document.querySelector(".gameInfoText");
        gameInfoPlayer.textContent = Game.currentPlayer().name + " WINS!";
        gameInfoText.textContent = "";
    };

    const drawRender = () => {
        const gameInfoPlayer = document.querySelector(".gameInfoPlayer");
        const gameInfoText = document.querySelector(".gameInfoText");
        gameInfoPlayer.textContent = "";
        gameInfoText.textContent = "It's a DRAW!";
    };


    return { sceneSwitch, playerRender, boardResetRender, playRender, winRender, drawRender };

})();

// Game module contains all game related logic
const Game = (() => {
    let _currentPlayer = players[0];

    const createBoard = () => {
        let arr = [];
        let insideArray = [];
        for (let i = 0; i < 3; i++) {
            for (let i = 0; i < 3; i++) {
                insideArray.push(" ");
            }
            arr.push(insideArray);
            insideArray = [];
        }
        return arr;
    };

    let _board = createBoard();

    const currentPlayer = () => {
        return _currentPlayer;
    }

    const togglePlayer = () => {
        if (_currentPlayer === players[0]) {
            _currentPlayer = players[1];
        } else {
            _currentPlayer = players[0];
        }
        DisplayController.playerRender();
    };

    const winRows = () => {
        let countX = 0;
        let countO = 0;
        for (let i = 0; i < _board.length; i++) {
            for (let j = 0; j < _board.length; j++) {
                if (_board[i][j] === "O") {
                    countX++;
                } else if (_board[i][j] === "O") {
                    countO++;
                }
            }
            if (countX === 3 || countO === 3) {
                return true;
            } else {
                countX = 0;
                countO = 0;
            }
        }
        return false;
    };

    const winCols = () => {
        let countX = 0;
        let countO = 0;
        for (let i = 0; i < _board.length; i++) {
            for (let j = 0; j < _board.length; j++) {
                if (_board[j][i] === "X") {
                    countX++;
                } else if (_board[j][i] === "O") {
                    countO++;
                }
            }
            if (countX === 3 || countO === 3) {
                return true;
            } else {
                countX = 0;
                countO = 0;
            }
        }
        return false;
    };

    const winDiagonal = () => {
        let countX = 0;
        let countO = 0;
        for (let i = 0; i < _board.length; i++) {
            if (_board[i][i] === "X") {
                countX++;
            } else if (_board[i][i] === "O") {
                countO++;
            }
        }
        if (countX === 3 || countO === 3) {
            return true;
        } else {
            countX = 0;
            countO = 0;
        }
        let j = _board.length - 1;
        for (let i = 0; i < _board.length; i++) {
            if (_board[i][j] === "X") {
                countX++;
            } else if (_board[i][j] === "O") {
                countO++;
            }
            j--;
        }
        if (countX === 3 || countO === 3) {
            return true;
        } else {
            return false;
        }
    };

    const winBool = () => {
        if (winRows() || winCols() || winDiagonal()) {
            return true;
        } else {
            return false;
        }
    };

    const draw = () => {
        for (let i = 0; i < _board.length; i++) {
            for (let j = 0; j < _board.length; j++) {
                if (_board[i][j] === " ") {
                    return false;
                }
            }
        }
        return true;
    };

    const reset = () => {
        for (let i = 0; i < _board.length; i++) {
            for (let j = 0; j < _board.length; j++) {
                _board[i][j] = " ";
            }
        }
        DisplayController.boardResetRender();
    };

    const initializeCells = () => {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => cell.textContent = " ");
        cells.forEach(cell => cell.addEventListener("click", (e) => {
            if (cell.textContent != " ") {
                return;
            }

            switch (e.target.attributes["data-cell"].value) {
                case "1":
                    _board[0][0] = _currentPlayer.symbol;
                    break;
                case "2":
                    _board[0][1] = _currentPlayer.symbol;
                    break;
                case "3":
                    _board[0][2] = _currentPlayer.symbol;
                    break;
                case "4":
                    _board[1][0] = _currentPlayer.symbol;
                    break;
                case "5":
                    _board[1][1] = _currentPlayer.symbol;
                    break;
                case "6":
                    _board[1][2] = _currentPlayer.symbol;
                    break;
                case "7":
                    _board[2][0] = _currentPlayer.symbol;
                    break;
                case "8":
                    _board[2][1] = _currentPlayer.symbol;
                    break;
                case "9":
                    _board[2][2] = _currentPlayer.symbol;
                    break;
            }
            DisplayController.playRender(e.target);
            if (winBool()) {
                DisplayController.winRender();
            } else if (draw()) {
                DisplayController.drawRender();
            } else {

                Game.togglePlayer();
            }
        }));
    };

    const playRound = () => {

    };


    return { currentPlayer, createBoard, togglePlayer, initializeCells, reset };

})();

// TEST STUFF

Game.initializeCells();
let cell = document.querySelector(".cell");
let pvp = document.querySelector(".pvp");
let pve = document.querySelector(".cpu");

pve.addEventListener("click", () => {
    DisplayController.sceneSwitch("difficulty");
});

pvp.addEventListener("click", () => {
    DisplayController.sceneSwitch("game");
});

window.addEventListener("keydown", () => {
    Game.reset();
});

