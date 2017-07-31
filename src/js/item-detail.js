var $ = require('jquery');

$(".go-article-content").click(function() {
    $('html, body').animate({
        scrollTop: $("#main-content").offset().top
    }, 1000);
});


$(".go-comments").click(function() {
    $('html, body').animate({
        scrollTop: $("#comments-list").offset().top
    }, 1000);
});
