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

$(".likes").on("click",function(){
    console.log(this);
    $(this).find("i").toggleClass("fa-heart fa-heart-o");
});
