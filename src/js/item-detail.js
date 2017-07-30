var $ = require('jquery');

$(".go-article-content").click(function() {
    $('html, body').animate({
        scrollTop: $("#main-content").offset().top
    }, 1000);
});