const ul = document.querySelector('ul');
const button = document.getElementById('button');

const nameArray = ["Mark", "Jhon", "Bob", "David", "Jhony"];
 
button.addEventListener('click', () => {
    ul.innerHTML = '';
    for(let i=0; i<nameArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = nameArray[i];

        ul.appendChild(li);
    }
});