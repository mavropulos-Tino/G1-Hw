const rowInput = document.getElementById('rowInput');
const colInput = document.getElementById('colInput');
const printButton = document.getElementById('printButton');
const errorMessage = document.getElementById('errorMessage');

const table = document.createElement('table');
document.body.appendChild(table);

function showError(message) {
    errorMessage.textContent = message;
    return;
}
function makeTable(rows, columns) {
    table.innerHTML= '';
    for(let i=0; i<columns; i++) {
        let tableColumn = document.createElement('tr');
        table.appendChild(tableColumn);

        for(let j=0; j<rows; j++) {
            let tableRow = document.createElement('td');
            tableRow.textContent = `Row-${i+1} Column-${j+1}`;
            tableColumn.appendChild(tableRow);
        }
    }
}
function inputValidation(rows, columns) {
    if(rows <= 0 || columns <= 0) {
        showError('Inputs cannot be a 0 a negative number or empty');
    } else {
        makeTable(rows, columns)
    }
}

printButton.addEventListener('click', () => {
    let rows = rowInput.value;
    let columns = colInput.value;

    errorMessage.textContent = '';
    (inputValidation(rows, columns));
});