var $ = require('jquery');

$(".comments-title").on("click",function(){
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