const movies = [
  "shawshank redemption",
  "godfather",
  "the dark knight",
  "pulp fiction",
  "forrest gump",
  "inception",
  "the matrix",
  "goodfellas",
  "fight club",
  "interstellar",
  "the lord of the rings: the return of the king",
  "star wars: episode v - the empire strikes back",
  "the silence of the lambs",
  "saving private ryan",
  "schindler's list",
  "jurassic park",
  "the green mile",
  "gladiator",
  "the departed",
  "whiplash"
];

let flag = false;

let input = document.getElementById('input');
let result = document.getElementById('result');


function setResult(flag) {
    if(flag) {
        result.textContent = 'The movie can be rented';
        result.style.color = '#44a13c';
        // input.value = '';
        return;
    } else {
        result.textContent = 'The movie can\'t be rented';
        result.style.color = '#a13c3c';
        // input.value = '';
        return;
    }
}

document.getElementById('button')
    .addEventListener('click', () => {
        result.textContent = '';
        result.style.color = '#ffffff';

        for(let i=0; i<movies.length; i++) {
            if(input.value.toLowerCase() === movies[i]) {
                flag = true;
            } else {
                continue;
            }
        }

        if(flag) {
            setResult(flag);
            flag = false;
        } else {
            setResult(flag);
        }
    });
