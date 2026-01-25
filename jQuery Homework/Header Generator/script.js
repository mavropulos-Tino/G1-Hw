$('#submitButton').on("click", function() {
    $('h1').remove();
    
    let textInput = $('#textInput').val();
    let colourInput = $('#colourInput').val();

    if(!textInput || !colourInput) {
        return;
    }

    let header = $('<h1></h1>');
    header.text(textInput);
    header.css('color', colourInput);

    $('.container').append(header);
});