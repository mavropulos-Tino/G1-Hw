const numberButtons = document.querySelectorAll('.number'); // Buttons
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.delete');

const previousDisplay = document.querySelector('.previous-operation'); // Displays
const currentDisplay = document.querySelector('.current-operation');

function Calculator(previousElement, currentElement) { // Constructor
    this.previousElement = previousElement;
    this.currentElement = currentElement;
    this.previousNum = '';
    this.currentNum = '';
    this.operator = undefined;
}
const calculator = new Calculator(previousDisplay, currentDisplay); // Creating a calculator instance


function clearAll() { // Clears everything and resets the display
    calculator.currentNum = '';
    calculator.previousNum = '';
    calculator.operator = undefined;
    updateDisplay();
}

function deleteLast() { // Deletes the last digit
    calculator.currentNum = calculator.currentNum.toString().slice(0, -1);
    updateDisplay();
}

function appendNumber(number) { // Adds a number or decimal point to the current number
    if(number === '.' && calculator.currentNum.includes('.')) { // Prevents the user from inputing multiple decimal points
        return;
    }
    calculator.currentNum = calculator.currentNum.toString() + number.toString(); // otherwise it just appends the numbe to the current operand
    updateDisplay();
}

function appendOperation(operator) { // We select the operation here and then move it and the first operand to form current to previous number
    if(calculator.currentNum === '') { // Prevents adding an operator if we dont have an ampty current number
        return;
    }
    if(calculator.previousNum !== '') { // If a previous exists then we compute the expersion and then add the operator which allows chaining operations
        compute();
    }
    calculator.operator = operator;
    calculator.previousNum = calculator.currentNum;
    calculator.currentNum = '';
    updateDisplay();
}

function compute() { // Computes two operands and an operator
    let result;
    const previous = parseFloat(calculator.previousNum); // Allowes floating point operations
    const current = parseFloat(calculator.currentNum);
    
    if (calculator.operator === '+') {
        result = previous + current;

    } else if(calculator.operator === '−') {
        result = previous - current;

    } else if(calculator.operator === '×') {
        result = previous * current;

    } else if(calculator.operator === '÷') {
        if(current === 0) {
            alert(undefined);
            clearAll();
            return;
        }
        result = previous / current;

    } else {
        return;
    }
    
    calculator.currentNum = result; // Stores result inside the current number position which allowes chaining operations
    calculator.operator = undefined; // We reset all the other variables and displays
    calculator.previousNum = '';
    updateDisplay();
}

function updateDisplay() { // Updates the  display
    calculator.currentElement.textContent = calculator.currentNum;
    
    if(calculator.operator != null) {
        calculator.previousElement.textContent = `${calculator.previousNum} ${calculator.operator}`;
    } else {
        calculator.previousElement.textContent = '';
    }
}

for(let i=0; i<numberButtons.length; i++) { // Loop thrugh all number buttons and we add event lsteners to them and also take their value
    numberButtons[i].addEventListener('click', () => {
        appendNumber(numberButtons[i].textContent);
    });
}
for(let i=0; i<operationButtons.length; i++) { // Same thing as with the numbers, we loop all operators and send their value 
    operationButtons[i].addEventListener('click', () => {
        appendOperation(operationButtons[i].textContent);
    });
}

equalsButton.addEventListener('click', function() { // Adds and event listener for the equals button
    compute();
});
clearButton.addEventListener('click', function() { // Adds and event listener for the clear all button
    clearAll();
});
deleteButton.addEventListener('click', function() { // Adds and event listener for the delete button
    deleteLast();
});

// Clears the calculator on page load
clearAll();