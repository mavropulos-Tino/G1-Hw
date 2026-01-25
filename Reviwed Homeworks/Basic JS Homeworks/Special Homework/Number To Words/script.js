// Data arrays
const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


function nameOnes(number) { // Returns single digit numbers (0-9)
    return ones[number];
}

function nameTeens(number) { // Returns teen numbers (10-19)
    let teensDigit = number-10;
    return teens[teensDigit];
}

function nameTens(number) { // Returns two digit numbers (20-99)
    let resultString = '';
    let tensDigit = Math.floor(number/10);
    
    // We need to check if its a multiple of ten first
    if(number%10 === 0) {
        resultString = tens[tensDigit];
    } else {
        // If noy we add a '-'
        resultString = tens[tensDigit] + '-' + ones[number%10];
    }
    
    return resultString;
}

function nameHundreds(number) { // Returns three digit numbers (100-999)
    let resultString = '';
    let hundredsDigit = Math.floor(number/100);
    
    resultString = ones[hundredsDigit] + ' hundred';
    
    // We need to check if its a multiple of a hundered first
    if (number%100 === 0) {
        return resultString;
    }
    
    // If not then we handle the remainder
    let remainder = number%100;
    
    if(remainder < 10) {
        resultString = resultString + ' and ' + ones[remainder]; // First we check if its a 1 digit number (ex 103, 207, 809)
    } else if (remainder < 20) {
        resultString = resultString + ' and ' + teens[remainder-10]; // Then do the same if its a 'teen' number (ex 213, 318, 815)
    } else {
        resultString = resultString + ' and ' + nameTens(remainder); // Then that means its a number from 20-99
    }
    
    return resultString;
}

function nameThousands(number) { // Returns four/five digit numbers (1,000-99,999)
    let resultString = '';
    let thousandsDigit = Math.floor(number/1000);
    
    if(thousandsDigit < 10) { 
        resultString = nameOnes(thousandsDigit) + ' thousand'; // We check if its a single digit (this handles thousands)
    } else if(thousandsDigit < 20) {
        resultString = nameTeens(thousandsDigit) + ' thousand'; // We check if its a teen digit (this handles teen thousands, doesnt add a '-' ex. one thousand and fifteen)
    } else {
        resultString = nameTens(thousandsDigit) + ' thousand'; // We check if its a double digit (this handles tens of thousands, adds a '-' ex. one thousand and twenty-two)
    }

    let remainder = number%1000;
    if (remainder === 0) { // We are chekcing if the hundreds digit is a 0 we just print the final number
        return resultString;
    }
    
    resultString = resultString + ' ';
    
    if(remainder >= 100) {
        resultString = resultString + nameHundreds(remainder);
    } else if(remainder >= 20) {
        resultString = resultString + nameTens(remainder);
    } else if(remainder >= 10) {
        resultString = resultString + nameTeens(remainder);
    } else {
        resultString = resultString + 'and ' + nameOnes(remainder);
    }
    
    return resultString;
}

function nameHundredThousands(number) { // Returns six digit numbers (100,000-999,999)
    let resultString = '';
    let thousandsDigit = Math.floor(number/1000);
    
    if(thousandsDigit < 10) {
        resultString = nameOnes(thousandsDigit) + ' thousand'; // Same logic as above
    } else if(thousandsDigit < 20) {
        resultString = nameTeens(thousandsDigit) + ' thousand';
    } else if(thousandsDigit < 100) {
        resultString = nameTens(thousandsDigit) + ' thousand';
    } else {
        resultString = nameHundreds(thousandsDigit) + ' thousand'; // Only now we also add hundreds of thousands
    }
    
    let remainder = number%1000;
    if (remainder === 0) { // We check if the thousands digit is a 0 in which case we just print the final string
        return resultString;
    }
    
    resultString = resultString + ' ';
    
    // Same logic as for the thousands
    if(remainder >= 100) {
        resultString = resultString + nameHundreds(remainder);
    } else if(remainder >= 20) {
        resultString = resultString + nameTens(remainder);
    } else if(remainder >= 10) {
        resultString = resultString + nameTeens(remainder);
    } else {
        resultString = resultString + 'and ' + nameOnes(remainder);
    }
    
    return resultString;
}


function numberToWords(number) { // Main function
    if(number === 0) {
        return "zero"; // Handling 0
    }
    if(number < 10) {
        return nameOnes(number);
    }
    if(number < 20) {
        return nameTeens(number);
    }
    if(number < 100) {
        return nameTens(number);
    }
    if(number < 1000) {
        return nameHundreds(number);
    }
    if(number < 100_000) {
        return nameThousands(number);
    }
    if(number < 1_000_000) {
        return nameHundredThousands(number);
    }
    if(number === 1_000_000) {
        return "one million"; // Handling 1 million
    }
}

// HTML Elements
const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', function() { // Updates every keystroke
    const value = input.value.trim(); // We trim white space around the input
    
    if (value === '') { // Solves a bug by clearing the error message after we remove a faulty inout value otherwise the error message stays even though the input is empty
        output.value = '';
        return;
    }
    
    // More advanced boolean operation to check if we dont have only numbers inside input
    if (!/^\d+$/.test(value)) {
        output.value = 'Invalid input';
        return;
    }
    
    let number = parseInt(value);
    if (number > 1000000) { // Sets the cap at 1 million
        output.value = 'Number too big';
        return;
    }
    
    // Displays final result string
    output.value = numberToWords(number);
});