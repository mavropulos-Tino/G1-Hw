let url = 'https://swapi.dev/api/people/';

$('#button').on("click", function() {
    $.ajax({
        url: url,
        method: 'get',
        success: function(res) {
            let header = $(`<h1></h1>`);
            header.text(`Name: ${res.results[0].name}, height: ${res.results[0].height}cm and mass: ${res.results[0].mass}kg.`);
            $('body').append(header);
        },
        error: function(error) {
            console.log(error);
        }
    });
});