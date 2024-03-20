const container = document.querySelector("#main");

const GRIDSIDE = 600;
let side = 16;

container.style.width = container.style.height = `${GRIDSIDE}px`;

createGridCells(16);
changeColor();

function createGridCells(side) {
    for (let i=0; i < (side*side); i++) {
        const gridCell = document.createElement("div");
        
        gridCell.style.width = gridCell.style.height = `${(GRIDSIDE / side) - 2}px`;
        gridCell.classList.add("cell");

        container.appendChild(gridCell);
    }
}

function changeColor() {
    const grids = document.querySelectorAll(".cell");

    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            const rgb = "rgb(" + Math.floor(Math.random() * 255)
            + "," + Math.floor(Math.random() * 255) + ","
            + Math.floor(Math.random() * 255) + ")";
            grid.style.background = rgb;
        });
    });
}

const startAgainButton = document.querySelector(".button");
startAgainButton.addEventListener("click", () => {
    let gridSize = prompt("Please enter size of grid side.\nPlease input number from 1-100");
    if (gridSize < 1 || gridSize >100) {
        alert("A larger number of squares might result  delays, freezing, or crashing.\nPlease input number 1-100")
    } else {
        container.innerHTML = "";
        createGridCells(gridSize);
        changeColor();
    }
})





