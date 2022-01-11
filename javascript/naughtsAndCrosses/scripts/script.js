// Factory function contains all player related attributes and functions
const Player = (name, symbol) => {
    return { name, symbol };
};

// TEST PLAYERS FOR DEBUGGING PURPOSES
let players = [Player("Player 1", "X"), Player("Player 2", "O")];
console.log(players);

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

    const playerRender = () => {
        const gameInfoPlayer = document.querySelector(".gameInfoPlayer");
        gameInfoPlayer.textContent = Game.currentPlayer.name + " ";
    };

    return { sceneSwitch, playerRender };

})();

// Game module contains all game related logic
const Game = (() => {
    let currentPlayer = players[1];

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


    return { currentPlayer, createBoard };

})();

console.log(Game.createBoard());

let cpu = document.querySelector(".cpu");
let pvp = document.querySelector(".pvp");


pvp.addEventListener("click", () => {
    DisplayController.sceneSwitch("game");
});

cpu.addEventListener("click", () => {
    DisplayController.sceneSwitch("difficulty");
})