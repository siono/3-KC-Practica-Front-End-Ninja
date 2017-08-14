window.$ = window.jQuery = require('jquery');

require ('bootstrap-validator');

function maxWord(text,num){
    var words = text.split(" ");
    if (words.length == 0) {return false;}   
    if (words.length <= num){return true;}
    return false;
}

$(document).ready(function(){
  $('#comment-form').validator({
    custom: {
        'maxword120': function($el) {
                if (!maxWord($el.val(), 120)) return "El mensaje no debe superar las 120 palabras";
            }
        }
  }).on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    //Error formulario
  } else {
    //Exito
    $('#success_message').slideDown({ opacity: "show" }, "slow"); // Mostramos mensaje de exito.

    // Cancela el envio del formulario
    e.preventDefault();

    /*$('#success_message').slideDown({ opacity: "show" }, "slow") // Mostramos mensaje de exito.
            $('#contact_form').data('bootstrapValidator').resetForm(); //reseteamos formulario
            // Cancela el envio del formulario
            e.preventDefault();
            // Get the form instance
            var $form = $(e.target);
            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
     */
    
  }
})

});




   