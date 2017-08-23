window.$ = window.jQuery = require('jquery');  //JQuery no puede ser importado con ECMA6 por eso utilizamos require

import CommentsService from "./services/CommentsService";
import UIManager from "./services/UIManager";
import CommentsListManager from "./services/CommentsListManager"
import CommentsFormManager from "./services/CommentsFormManager";

//cargamos los comentarios cuando el div comments-list sea visible al hacer scroll en el detalle articulo
if (window.location.pathname == "/article.html"){
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $('#comments-list').offset().top) {

        const commentsService = new CommentsService("/comments/");
        const commentsListUIManager = new UIManager(".comments-list");

        const commentsListManager = new CommentsListManager(commentsService,commentsListUIManager);
        commentsListManager.init();

        const commentsFormManager = new CommentsFormManager('#comment-form',commentsService);
        commentsFormManager.init();
       
    }
});
}