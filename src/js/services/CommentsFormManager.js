const $ = require('jquery');
require('bootstrap-validator');
import { maxWord } from "../utils";


export default class CommentsFormManager {

    constructor(elementSelector, commentsService) {
        this.elementSelector = elementSelector;
        this.commentsService = commentsService;
    }

    init() {
        this.setupSubmitEventHandler();
    }

    setupSubmitEventHandler() {

        $(this.elementSelector).validator({
            custom: {
                'maxword120': function ($el) {
                    if (!maxWord($el.val(), 120)) return "El mensaje no debe superar las 120 palabras";
                }
            }
        }).on('submit', (e) => {
            if (this.isValidForm(e)) {
        
                // Cancela el envio del formulario
                e.preventDefault();

                this.sendComment();

            } 
        })
    }

    isValidForm(e) {
        return !e.isDefaultPrevented();
    }




    sendComment() {
        const comment = {
            nombre: $(this.elementSelector).find("#nombre").val(),
            apellidos: $(this.elementSelector).find("#apellidos").val(),
            email: $(this.elementSelector).find("#email").val(),
            url_avatar: $(this.elementSelector).find("#url_avatar").val(),
            mensaje: $(this.elementSelector).find("#mensaje").val(),
            fecha_publicacion: new Date(),
            newId: $('#article-content').attr('data-id')
        }

        this.commentsService.create(comment, 
            success => {
                $('#success_message').slideDown({ opacity: "show" }, "slow");
                this.resetForm();
            },
            error => {
                //Error formulario
                $('#error_message').slideDown({ opacity: "show" }, "slow"); // Mostramos mensaje de error.
            });

    }

    resetForm() {
        console.log("Reset Form",this.elementSelector);
        $(this.elementSelector)[0].reset(); 
    }


}