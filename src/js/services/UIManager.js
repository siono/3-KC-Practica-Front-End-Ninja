const $ = require("jquery");


export default class UIManager{

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

    setEmptyHtml(html){
        //busca un descendiente de this.element, que tenga la clase CSS ui-status y empty y le asigna el html pasado por parametro.
        this.element.find(".ui-status.empty").html(html);
    }

    setLoadingHtml(html){
        //busca un descendiente de this.element, que tenga la clase CSS ui-status y loading y le asigna el html pasado por parametro.
        this.element.find(".ui-status.loading").html(html);
    }

    setErrorHtml(html){
        //busca un descendiente de this.element, que tenga la clase CSS ui-status y error y le asigna el html pasado por parametro.
        this.element.find(".ui-status.error").html(html);
    }

    setIdealHtml(html){
        //busca un descendiente de this.element, que tenga la clase CSS ui-status e ideal y le asigna el html pasado por parametro.
        this.element.find(".ui-status.ideal").html(html);
    }
}