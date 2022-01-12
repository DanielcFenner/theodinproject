// Factory function contains all player related attributes and functions
const Player = (name, symbol) => {
    return { name, symbol };
};

// TEST PLAYERS FOR DEBUGGING PURPOSES
let players = [Player("Player 1", "X"), Player("Player 2", "O")];

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
        gameInfoPlayer.textContent = Game.currentPlayer() + " ";
        if (Game.currentPlayer() === players[0].name) {
            gameInfoPlayer.style.color = "var(--blue9)";

        } else {
            gameInfoPlayer.style.color = "var(--pink9)";
        }
    };

    const boardResetRender = () => {
        const cell = document.querySelectorAll(".cell");
        cell.forEach(element => element.textContent = "");
    };


    return { sceneSwitch, playerRender, boardResetRender };

})();

// Game module contains all game related logic
const Game = (() => {
    let _currentPlayer = players[0];

    const currentPlayer = () => {
        return _currentPlayer.name;
    }

    // Returns 3x3 array with empty strings
    const createBoard = () => {
        let arr = [];
        let insideArray = [];
        for (let i = 0; i < 3; i++) {
            for (let i = 0; i < 3; i++) {
                insideArray.push("");
            }
            arr.push(insideArray);
            insideArray = [];
        }
        return arr;
    };

    const togglePlayer = () => {
        if (_currentPlayer === players[0]) {
            _currentPlayer = players[1];
        } else {
            _currentPlayer = players[0];
        }
        DisplayController.playerRender();
    };

    const playRound = () => {

    };


    return { currentPlayer, createBoard, togglePlayer };

})();

// TEST STUFF
let cell = document.querySelector(".cell");
let pvp = document.querySelector(".pvp");
let pve = document.querySelector(".cpu");

pve.addEventListener("click", () => {
    DisplayController.sceneSwitch("difficulty");
});

pvp.addEventListener("click", () => {
    DisplayController.sceneSwitch("game");
});

cell.addEventListener("click", () => {
    Game.togglePlayer();
});

window.addEventListener("keydown", () => {
    DisplayController.boardResetRender();
});
