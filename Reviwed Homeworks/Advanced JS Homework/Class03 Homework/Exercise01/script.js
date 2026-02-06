const URL = 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json';
const container = document.getElementById('dataContainer');

function makeElements(data) {
    container.innerHTML = '';

    let h1 = document.createElement('h1');
    h1.textContent = data.academy;

    let ul = document.createElement('ul');
    for(let student of data.students) {
        let li = document.createElement('li');
        li.textContent = student;
        ul.appendChild(li);
    }

    container.append(h1, ul);
}

document.getElementById('button')
    .addEventListener('click', () => {
        $.ajax({
            type: "GET",
            url: URL,
            // dataType: "json", -- We can use this alternatively to get the data as JSON staright away instead of parsing it later on.
            success: function(res) {
                console.log('success');

                let data = JSON.parse(res);
                makeElements(data);
            },
            error: function(error) {
                console.log(error.status);
            }
        });
    });