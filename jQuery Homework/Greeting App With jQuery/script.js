$('#submitButton').on("click", function() {
    let input = $('#nameInput').val();

    if(!input) {
        return;
    }
    $('.greetingsHeader').text(`Greetings ${input}!`);
})