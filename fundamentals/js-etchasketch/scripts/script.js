let gridSize = 64;
let pixelHeight = 800 / gridSize;
let pixelAmount = gridSize * gridSize;
const gridContainer = document.querySelector(".gridContainer");


for (let i = 0; i < pixelAmount; i++) {
    let div = document.createElement("div");
    div.classList.add("gridPixel");
    div.style.width = `${pixelHeight}px`
    div.style.height = `${pixelHeight}px`

    gridContainer.appendChild(div);

}


// const gridPixel = document.querySelector(".gridPixel");
// gridPixel.style.width = `${pixelHeight}px`;
// gridPixel.style.height = `${pixelHeight}px`;

// console.log(gridPixel)