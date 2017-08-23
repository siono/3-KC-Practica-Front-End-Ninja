const $ = require('jquery');

export default class CommentsService{
    constructor(url){
        this.url = url;
    }

    //obtener listado de comentarios
    list(successCallback, errorCallback){
        $.ajax({
            url: this.url,
            success: successCallback,
            error: errorCallback
        });

    }

    //crear comentario
    create(comment,successCallback, errorCallback) {
        $.ajax({
            url: this.url,
            data: comment,
            method: "post",
            success: successCallback,
            error: errorCallback
        });
    }

    //borrar comentario
    delete(commentId,successCallback, errorCallback){
        $.ajax({
            url: `${this.url}${commentId}`,
            methode: "delete",
            success: successCallback,
            error: errorCallback
        });
    }
}