const $ = require("jquery");
import {calculatePublicationDate} from "../utils";

export default class CommentsListManager {

    constructor(commentsService, commentsListUIManager) {
        this.commentsService = commentsService;
        this.commentsListUIManager = commentsListUIManager;
    }

    init() {
        this.loadComments();
    }

    loadComments() {
        this.commentsService.list(
            comments => {
                if (comments.length == 0) {

                    //mostramos el estado vacio
                    this.commentsListUIManager.setEmpty();

                } else {

                    this.renderComments(comments);

                    //Quitamos el mensaje de cargando y mostramos el loading.
                    this.commentsListUIManager.setIdeal();
                }
            },
            error => {
                //mostramos el estado error
                this.commentsListUIManager.setError();
                console.error("Error al recuperar los comentarios", error);
    
            }
        );
    }

    renderComments(comments){
        let html = '';
        
        for (let comment of comments) {
            html += this.renderComment(comment);
        }
        //Metemos el HTML en el div que contiene los comentarios
        this.commentsListUIManager.setIdealHtml(html);
    }

    renderComment(comment){
        if (comment.url_avatar == "") comment.url_avatar = "/images/default-user-image.png"

        return `<article class="comment">
        <a class="comment-img">
            <img src="${comment.url_avatar}" alt="${comment.nombre} ${comment.apellidos}" width="50" height="50">
        </a>
        <div class="comment-body">
            <div class="text">
                <p>${comment.mensaje}</p>
            </div>
            <p class="attribution">por <a href="mailto:${comment.email}">${comment.nombre} ${comment.apellidos}</a>, ${calculatePublicationDate(new Date(comment.fecha_publicacion))}</p>
        </div>
        </article>`;
    }


}