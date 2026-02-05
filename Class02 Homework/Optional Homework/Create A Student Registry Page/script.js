const inputArray = document.querySelectorAll('input'); // Puts all 4 inputs into an array
let database = [];

function Student(firstName, lastName, age, email) { // Constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

function resetInput() { // Loops through all inputs and clears them
    for(let i=0; i<inputArray.length; i++) {
        inputArray[i].value = "";
    }
}
function inputValidation() { // Validates that none of the inputs or empty
    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i].value === '') {
            alert("Fields cannot be empty!")
            return false;
        } else {

        }
    }
    alert("Student obejct created.");
    return true;
}
function studentGenerator() { // Generates a student object based on input value
    let student = new Student(inputArray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value);
    database.push(student);
}

document.getElementById('submitButton')
    .addEventListener('click', () => {
    if(inputValidation()) {
        studentGenerator();
        resetInput();
        console.log(database);
    } else {
        return;
    }
    })