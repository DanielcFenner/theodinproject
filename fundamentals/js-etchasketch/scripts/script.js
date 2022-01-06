let gridSize = 64;
let pixelHeight = 800 / gridSize;
let pixelAmount = gridSize * gridSize;
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
        pixel.style.backgroundColor = "black"
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

// const gridPixel = document.querySelector(".gridPixel");
// gridPixel.style.width = `${pixelHeight}px`;
// gridPixel.style.height = `${pixelHeight}px`;

// console.log(gridPixel)