const titleInput = document.getElementById('titleInput');
const priorityInput = document.getElementById('priorityInput');
const colorInput = document.getElementById('colorInput');
const descriptionInput = document.getElementById('descriptionInput');

let reminderDatabase = [];
let index = 0;

function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}
function clearForm() {
    titleInput.value = '';
    priorityInput.value = '';
    colorInput.value = '#000000';
    descriptionInput.value = ''
}
function checkFormValidity() {
    if(titleInput.value !== '' && 
       priorityInput.value !== '' && 
       colorInput.value !== '' && 
       descriptionInput.value !== '') {
            return true;

        } else {
            return false;
        }    
}

function createReminder(database, index) {
    let reminderCard = document.createElement('div');
    reminderCard.classList.add('reminder');

    let title = document.createElement('h1');
    title.id = 'title';
    title.textContent = database[index].title;

    let priority = document.createElement('div');
    priority.id = 'priority';
    priority.textContent = database[index].priority;

    reminderCard.style.borderColor = database[index].color;

    let description = document.createElement('h4');
    description.id = 'description';
    description.textContent = database[index].description;

    reminderCard.append(title, priority, description);

    document.querySelector('.cardContainer').appendChild(reminderCard);
}

document.getElementById('submitButton')
    .addEventListener('click', () => {
    if(checkFormValidity()) {
        let reminder = new Reminder(titleInput.value, priorityInput.value, colorInput.value, descriptionInput.value);
        reminderDatabase.push(reminder);

        createReminder(reminderDatabase, index);
        alert("Reminder Created!");
        index++;
        
        clearForm();

    } else {
        alert("Fields cannot be empty!");
    }
});

let displayState = false;

document.getElementById('showReminders')
    .addEventListener('click', () => {
        if(displayState) {
            document.querySelector('.cardContainer').classList.add('hidden');
            displayState = false;
        } else {
            document.querySelector('.cardContainer').classList.remove('hidden');
            displayState = true;
        }
    })