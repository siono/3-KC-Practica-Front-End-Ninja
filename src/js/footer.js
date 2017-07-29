var $ = require('jquery');

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // Si la pagina hace scroll >= 50px
        $('#return-to-top').fadeIn(200);    // Muestro la flecha
    } else {
        $('#return-to-top').fadeOut(200);   // Sino la oculto
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});