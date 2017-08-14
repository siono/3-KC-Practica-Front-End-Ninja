var $=require('jquery');

$(".comments-title").click(function(){
    $(".comments").toggleClass("hidden");
    $(".comments-title i").toggleClass("fa-caret-up fa-caret-down");
});