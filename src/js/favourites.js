window.$ = window.jQuery = require('jquery');

export var favourites = localStorage.getItem('favourites');

if (favourites == null) {
    favourites = new Array();
} else {
    favourites = JSON.parse(favourites);
}

export function setFavourite(favourite,favourites) {
    let key = $.inArray(favourite, favourites);
    if (key == -1) {
        favourites.push(favourite);
    }
}

export function deleteFavourite(favourite,favourites) {
    let key = $.inArray(favourite, favourites);
    if (key != -1) {
        favourites.splice(key, 1);
    }
}

export function loadClassLike(favourite) {
    if (existFavorite(favourite)) {
        return "fa fa-heart";
    } else {
        return "fa fa-heart-o";
    }
}

function existFavorite(valor) {
    let key = $.inArray(valor, favourites);
    if (key == -1) return false;
    else return true;
}