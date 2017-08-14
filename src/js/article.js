var $ = require('jquery');

console.log("Article.js");

$(".go-article-content").click(function() {
    $('html, body').animate({
        scrollTop: $("#main-content").offset().top
    }, 1000);
});

//TODO: no funciona.
$(".go-comments").click(function() {
    $('html, body').animate({
        scrollTop: $("#comments-list").offset().top
    }, 1000);
});

$(".likes").on("click",function(){
    $(this).find("i").toggleClass("fa-heart fa-heart-o");
});

function calculatePublicationDate(publicationDate){
    
    var unSeg = 1;
    var unMin = unSeg*60;
    var unaHora = unMin * 60;
    var unDia = unaHora * 24;
    var unaSemana = unDia * 7;
    var dias_semana = new Array("Dom","Lun","Mar","Mie","Jue","Vie","Sab");
    var meses = new Array ("01","02","03","04","05","06","07","08","09","10","11", "12");
   
    var systemDate = new Date();
    var timeagoSeg = Math.floor((systemDate - publicationDate)/1000);

    if (timeagoSeg < unMin) 
        return timeagoSeg + "segundos";
    else if (timeagoSeg >= unMin && timeagoSeg < unaHora)
        return timeagoSeg + "minutos";
    else if (timeagoSeg >= unaHora && timeagoSeg < unDia)
        return timeagoSeg + "horas";
    else if (timeagoSeg >= unDia && timeagoSeg < unaSemana)
        return dias_semana[publicationDate.getDay()];
    else if (timeagoSeg >= unaSemana)
        return  dias_semana[publicationDate.getDay()] + " " + 
                publicationDate.getDate() + "-" + 
                meses[publicationDate.getMonth()] + "-" + 
                publicationDate.getFullYear()+" "+
                publicationDate.getHours()+":"+publicationDate.getMinutes();
 
}
var aDay = 24*60*60*1000
console.log(calculatePublicationDate(new Date(Date.now() - aDay*8)));
