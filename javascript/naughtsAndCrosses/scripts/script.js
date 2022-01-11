// Factory function contains all player related attributes and functions
const Player = (name, symbol) => {
    return { name, symbol };
};

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

    const playerToggle = () => {
        const gameInfo = document.querySelector(".gameInfo");

    }

    return { sceneSwitch };

})();

// Game module contains all game related logic
const Game = (() => {

})();

let cpu = document.querySelector(".cpu");
let pvp = document.querySelector(".pvp");

pvp.addEventListener("click", () => {
    DisplayController.sceneSwitch("game");
});

cpu.addEventListener("click", () => {
    DisplayController.sceneSwitch("difficulty");
})