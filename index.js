// Create a script that inputs the desired grid dimensions (start with 16x16)
const gridSquares = document.querySelector('div.grid-squares');

// Set variable to know when the user 'mousedDown'ed.
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Initialise initial appearance
initialize();

// Allow user input for dimension
const inputButton = document.querySelector('.input');
inputButton.addEventListener('click', changeInitialization);




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
    // If the mouse is held down and hovered over the element → Change color.
    column.addEventListener('mouseover', (e) => {
        console.log(mouseDown);
        // If mouse is not held down, do not color.
        if (e.type === 'mouseover' && !mouseDown){
            return;
        }
        column.classList.add(`color-change`);
    })

    // If the element is 'mousedown'ed, change color immediately.
    column.addEventListener('mousedown', () => {
        column.classList.add(`color-change`);
    })
}

function initialize() {
    // Initialise dimensions e.g. 16x16
    let gridRows = 16;
    let gridColumns = 16;

    // Make the grids
    makeGrid(gridRows, gridColumns);

    // Change color of grid upon hover to black
    const columns = document.querySelectorAll('.column');
    columns.forEach(changeColor);
}

function changeInitialization() {
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

    // Have to select columns again because they don't exist after content removal.
    const columns = document.querySelectorAll('.column');
    columns.forEach(changeColor);
}