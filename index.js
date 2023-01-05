// Create a script that inputs the desired grid dimensions (start with 16x16)

// Initialise dimensions e.g. 16x16
let gridRows = 16;
let gridColumns = 16;

// Make the grids
const gridSquares = document.querySelector('div.grid-squares');
makeGrid(gridRows, gridColumns);

// Change color of grid upon hover to black
const columns = document.querySelectorAll('.column');
columns.forEach(changeColor);

// Allow user input for dimension
const inputButton = document.querySelector('.input');
inputButton.addEventListener('click', () => {
    dimension = parseInt(prompt("What dimensions would you like? (input a number up to 100)"));

    // Check if input is > 100, and prompt again if so.
    while (dimension > 100) {
        dimension = parseInt(prompt("Please choose a number up to 100 only"));
    }

    gridRows = dimension;
    gridColumns = dimension;

    // Remove the grid by clearing the elements
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    gridSquares.textContent = '';

    // Add the grid again
    makeGrid(gridRows, gridColumns);
    columns.forEach(changeColor);
})



// ------------------------------------------FUNCTIONS----------------------------------
// Create x rows with x elements in it using flex
// e.g. Create 16 divs with another 16 divs in each div
function makeGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        // Create a row
        row = document.createElement('div');
        // Add class e.g row-1 for selection when adding columns
        row.classList.add(`row`);
        
        // Create the number of squares (columns) and append all to the row div
        for (let j = 0; j < columns; j++) {
            column = document.createElement('div');
            column.classList.add(`column`);
            row.appendChild(column);
        }
        gridSquares.appendChild(row);
    }
}

// Change background-color upon hover on the element
function changeColor(column) {
    column.addEventListener('mouseover', () => {
        column.classList.add(`color-change`);
    })
}