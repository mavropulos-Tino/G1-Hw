function genRandomValue() {
    return Math.floor(Math.random() * 255 + 1);
}

function changeBodyColor() {
    let body = document.querySelector('body');
    body.style.backgroundColor = `rgb(${genRandomValue()}, ${genRandomValue()}, ${genRandomValue()})`;

    let h1 = document.createElement('h1');
    h1.textContent = body.style.backgroundColor;

    body.appendChild(h1);
}

changeBodyColor();