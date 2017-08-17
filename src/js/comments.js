window.$ = window.jQuery = require('jquery');  //JQuery no puede ser importado con ECMA6 por eso utilizamos require

import { CommentsService } from "./services/CommentsService";
import { UIManager } from "./services/UIManager";

//creamos la instancia
const commentsService = new CommentsService("/comments");
const commentsListUIManager = new UIManager(".comments-list");

commentsService.list(
    comments => {
        if (comments.length == 0) {

            //mostramos el estado vacio
            commentsListUIManager.setEmpty();

        } else {

            let html = '';

            for (let comment of comments) {
                html += `<article class="comment">
                <a class="comment-img">
                    <img src="${comment.url_avatar}" alt="${comment.nombre} ${comment.apellidos}" width="50" height="50">
                </a>
                <div class="comment-body">
                <div class="text">
                    <p>${comment.mensaje}</p>
                </div>
                <p class="attribution">por <a href="mailto:${comment.email}">${comment.nombre} ${comment.apellidos}</a> el ${comment.fecha_publicacion}</p>
                </div>
                </article>`;
            }
            
            $(".comments-list .ui-status.ideal").html(html);

            //Quitamos el mensaje de cargando y mostramos el loading.
            commentsListUIManager.setIdeal();
        }
    },
    error => {
        //mostramos el estado error
        commentsListUIManager.setError();
        console.error("Error al recuperar los comentarios", error);
    }
);