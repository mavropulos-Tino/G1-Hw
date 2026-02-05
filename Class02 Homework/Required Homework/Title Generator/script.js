const colorInput = document.getElementById('colorInput');
const fontSizeInput = document.getElementById('fontSizeInput');
const textInput = document.getElementById('textInput');
const button = document.getElementById('button');

const body = document.querySelector('body');

button.addEventListener('click', () => {
    let headers = document.querySelector('h1');
    if (headers) {
        headers.remove();
    }

    if(colorInput.value !== '' || fontSizeInput.value !== '' || textInput.value !== '') {
        
        let h1 = document.createElement('h1');
        h1.style.color = colorInput.value;
        h1.style.fontSize = `${fontSizeInput.value}px`;
        h1.textContent = textInput.value;

        body.appendChild(h1);
    } else {
        return;
    }
});