const Player = (name, symbol) => {
    return { name, symbol };
};

const DisplayController = (() => {

})();

const Game = (() => {

})();


let scene1 = document.querySelector(".menuScene");
let scene2 = document.querySelector(".theGame");

scene1.addEventListener("click", () => {
    scene1.style.display = "none";
    scene2.style.display = "flex";
})