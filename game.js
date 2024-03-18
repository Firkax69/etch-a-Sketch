const container = document.querySelector("#main");

for (let i=0; i < 16; i++) {
    const grid = document.createElement("div");
    grid.style.width = "20px";
    grid.style.height = "20px";
    grid.style.border = "1px solid red";
    container.appendChild(grid);
}

