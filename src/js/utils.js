export function calculatePublicationDate(publicationDate){
    
    var unSeg = 1;
    var unMin = unSeg*60;
    var unaHora = unMin * 60;
    var unDia = unaHora * 24;
    var unaSemana = unDia * 7;
    var dias_semana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var meses = new Array ("01","02","03","04","05","06","07","08","09","10","11", "12");
   
    var systemDate = new Date();
    var timeagoSeg = Math.floor((systemDate - publicationDate)/1000);
    
    if (timeagoSeg < unMin) 
        return timeagoSeg + " s";
    else if (timeagoSeg >= unMin && timeagoSeg < unaHora)
        return Math.floor(timeagoSeg/unMin) + " min";
    else if (timeagoSeg >= unaHora && timeagoSeg < unDia)
        return Math.floor(timeagoSeg/unaHora) + " h";
    else if (timeagoSeg >= unDia && timeagoSeg < unaSemana)
        return dias_semana[publicationDate.getDay()];
    else if (timeagoSeg >= unaSemana)
        return  publicationDate.getDate() + "-" + 
                meses[publicationDate.getMonth()] + "-" + 
                publicationDate.getFullYear()+" "+
                addZero(publicationDate.getUTCHours())+":"+addZero(publicationDate.getUTCMinutes()) +" h";
 
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}