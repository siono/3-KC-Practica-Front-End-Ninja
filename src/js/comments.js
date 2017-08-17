window.$ = window.jQuery = require('jquery');  //JQuery no puede ser importado con ECMA6 por eso utilizamos require

import { CommentsService } from "./CommentsService";
//Cargamos la lista de comentarios con AJAX

//creamos la instancia
const commentsService = new CommentsService("/comments");

commentsService.list(
    comments => {
        if (comments.length == 0) {

            //mostramos el estado vacio
            $(".comments-list").removeClass("loading").addClass("empty");

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
                <p class="attribution">by <a href="mailto:${comment.email}">${comment.nombre} ${comment.apellidos}</a> el ${comment.fecha_publicacion}</p>
                </div>
                </article>`;
            }
            
            $(".comments-list .ui-status.ideal").html(html);

            //Quitamos el mensaje de cargando y mostramos el loading.
            $(".comments-list").removeClass("loading").addClass("ideal");
        }
    },
    error => {
        //mostramos el estado error
        $(".comments-list").removeClass("loading").addClass("error");
        console.error("Error al recuperar los comentarios", error);
    }
);