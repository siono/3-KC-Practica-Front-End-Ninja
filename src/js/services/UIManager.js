const $ = require("jquery");


export class UIManager{

    constructor(selector){
        this.uiStateClasses = "empty loading error ideal"; //clases css que definen el estado del componente
        this.element = $(selector); //seleccionamos el elemento jquery en el constructor
    }
    
    setEmpty(){
        this.element.removeClass(this.uiStateClasses).addClass("empty");
    }

    setLoading(){
        this.element.removeClass(this.uiStateClasses).addClass("loading");
    }

    setError(){
        this.element.removeClass(this.uiStateClasses).addClass("error");
    }

    setIdeal(){
        this.element.removeClass(this.uiStateClasses).addClass("ideal");
    }
}