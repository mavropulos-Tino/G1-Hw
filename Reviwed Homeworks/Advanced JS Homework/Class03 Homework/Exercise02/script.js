const URL = 'https://swapi.py4e.com/api/people/1';
const container = document.getElementById('container');

function createHeading(data) {
    let h1 = document.createElement('h1');
    h1.textContent = data.name;
    container.appendChild(h1);

    createTableHeader(data);
}
function createTableHeader(data) {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    let th1 = document.createElement('th');
    th1.textContent = 'Key';
    let th2 = document.createElement('th');
    th2.textContent = 'Value';

    headerRow.append(th1, th2);
    table.appendChild(headerRow);

    createTableBody(data, table);
}
function createTableBody(data, table) {
    const dataArray = [['Height', data.height],
                       ['Weight', data.mass],
                       ['Eye Color', data.eye_color],
                       ['Hair Color', data.hair_color]];

    for(let dataValue of dataArray) {
        let row = document.createElement('tr');

        let tdKey = document.createElement('td');
        tdKey.textContent = dataValue[0];

        let tdValue = document.createElement('td');
        tdValue.textContent = dataValue[1];

        row.append(tdKey, tdValue);
        table.appendChild(row);
    }

    container.appendChild(table);
}

document.getElementById('button')
    .addEventListener('click', () => {
        fetch(URL)
            .then(function(res) {
                console.log("success");
                return res.json();
            })
            .then(function(data) {
                container.innerHTML = '';
                createHeading(data);
            })
            .catch(function(error) {
                console.log(error);
            }) 
    });