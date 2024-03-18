const container = document.querySelector("#main");

const GRIDSIDE = 600;
let rows = 16;
let columns = 16;

container.style.width = `${GRIDSIDE}px`;
container.style.height = `${GRIDSIDE}px`


function createGridCells() {
    for (let i=0; i < (rows*columns); i++) {
        const gridCell = document.createElement("div");
        
        gridCell.style.width = `${(GRIDSIDE / columns) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / rows) - 2}px`;
        gridCell.classList.add("cell");

        container.appendChild(gridCell);
    }
}

createGridCells();
