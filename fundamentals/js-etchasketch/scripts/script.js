let gridSize = 64;
let pixelHeight = 800 / gridSize;
let pixelAmount = gridSize * gridSize;
let color = "black";
const gridContainer = document.querySelector(".gridContainer");

function createGrid() {

    for (let i = 0; i < pixelAmount; i++) {
        let div = document.createElement("div");
        div.classList.add("gridPixel");
        div.style.width = `${pixelHeight}px`
        div.style.height = `${pixelHeight}px`

        gridContainer.appendChild(div);
    }

    let pixels = document.querySelectorAll(".gridPixel");
    pixels.forEach(pixel => pixel.addEventListener('mouseover', function (e) {
        pixel.style.backgroundColor = color;
    }))
}

createGrid();

function clearGrid() {
    let pixels = document.querySelectorAll(".gridPixel");
    pixels.forEach(pixel => gridContainer.removeChild(pixel));
}



const clear = document.querySelector(".clear");
clear.addEventListener("click", function (e) {
    clearGrid();
    createGrid();

});

const gridSizeButton = document.querySelector(".size")
gridSizeButton.addEventListener("click", function (e) {
    clearGrid();
    gridSize = parseInt(prompt("How big do you want the grid to be? (Sizes over 100 not recommended)"));
    pixelHeight = 800 / gridSize;
    pixelAmount = gridSize * gridSize;
    createGrid();
});

const redButton = document.querySelector(".red");
const blueButton = document.querySelector(".blue");
const greenButton = document.querySelector(".green");
const orangeButton = document.querySelector(".orange");
const pinkButton = document.querySelector(".pink");
const blackButton = document.querySelector(".black");
blackButton.addEventListener("click", function (e) {
    color = "#000000"
})
redButton.addEventListener("click", function (e) {
    color = "#eb9091"
})
blueButton.addEventListener("click", function (e) {
    color = "#5eb0ef"
})
greenButton.addEventListener("click", function (e) {
    color = "#5bb98c"
})
orangeButton.addEventListener("click", function (e) {
    color = "#fa934e"
})
pinkButton.addEventListener("click", function (e) {
    color = "#e38ec3"
})

// const gridPixel = document.querySelector(".gridPixel");
// gridPixel.style.width = `${pixelHeight}px`;
// gridPixel.style.height = `${pixelHeight}px`;

// console.log(gridPixel)