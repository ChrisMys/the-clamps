$(document).ready(function() {

  $('#clamp-number').on('keyup', function(e) {

    var inputValue = (parseFloat($(this).val())) ? parseFloat($(this).val()) : 0;
    var value1 = (inputValue) ? (inputValue * 2) / 3 : 0;
    var value2 = (inputValue) ? (100 * inputValue) / 1920 : 0;

    if (inputValue < 0) {

      $('#output').html("clamp(" + inputValue + "px, " + value2 + "vw, " + value1 + "px)");

    } else {

      $('#output').html("clamp(" + value1 + "px, " + value2 + "vw, " + inputValue + "px)");

    }

  });

});

function copyText() {

  navigator.clipboard.writeText( $('#output').text() );
  
  $('#output-copy').text('Copy');
  $('#clamp-number').val('');

 

}
