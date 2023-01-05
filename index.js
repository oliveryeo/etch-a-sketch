// Create a script that inputs the desired grid dimensions (start with 16x16)

const gridRows = 16;
const gridColumns = 16;

const gridSquares = document.querySelector('div.grid-squares');

makeGrid(gridRows, gridColumns);

// ------------------------------------------FUNCTIONS----------------------------------
// Create x rows with x elements in it using flex
// e.g. Create 16 divs with another 16 divs in each div
function makeGrid(rows, columns) {
    for (let i = 1; i <= rows; i++) {
        // Create a row
        row = document.createElement('div');
        // Add class e.g row-1 for selection when adding columns
        row.classList.add(`row`);
        
        // Create the number of columns and append all to the row div
        for (let j = 0; j < columns; j++) {
            column = document.createElement('div');
            column.classList.add(`column`);
            row.appendChild(column);
        }
        gridSquares.appendChild(row);
    }
}

// For loop to place every square in the grid