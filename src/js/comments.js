var $=require('jquery');

$(".comments-title").click(function(){
    $(".comments").toggleClass("hidden");
    $(".comments-title i").toggleClass("fa-caret-up fa-caret-down");
});

function maxWord(text,num){
    var words = text.split(" ");
    if (words.length <= num){
        return true;
    }
    else{
        return false;
    }
}


/*
$(document).ready(function() {
    $('#comment-form').bootstrapValidator({
        
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Debe introducir un nombre'
                    }
                }
            },
             apellidos: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Debe introducir un apellido'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Debe introducir un email'
                    },
                    emailAddress: {
                        message: 'Debe introducir un email válido'
                    }
                }
            },
            mensaje: {
                validators: {
                    custom: {
                        'maxNumberWord': function($el){return maxWord($el.val(),120)},
                        message:'Introduce un comentario que no supere las 120 palabras'
                    },
                    notEmpty: {
                        message: 'Debe de introcir un comentario'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Mostramos mensaje de exito.
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
        });
});*/