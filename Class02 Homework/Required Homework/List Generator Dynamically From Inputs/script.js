const colorInput = document.getElementById('colorInput');
const fontSizeInput = document.getElementById('fontSizeInput');
const itemInput = document.getElementById('itemInput');

const button = document.getElementById('button');

const body = document.querySelector('body');

let validItemsArray = [];

function getItemArray(items) {
    validItemsArray = [];
    items = items.trim();
    
    // Split by comma instead of space
    let splitItems = items.split(',');

    for(let i = 0; i < splitItems.length; i++) {
        let item = splitItems[i].trim();
        if(item !== '') {
            validItemsArray.push(item);
        }
    }
}

button.addEventListener('click', () => {
    let ul = document.createElement('ul');

    let itemArray = getItemArray(itemInput.value);

    for(let i=0; i<validItemsArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = validItemsArray[i];
        li.style.fontSize = `${fontSizeInput.value}px`;
        li.style.color = `${colorInput.value}`;

        ul.appendChild(li);
    }

    body.appendChild(ul);
});