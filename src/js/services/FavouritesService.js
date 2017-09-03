const $ = require('jquery');

export default class FavouritesService{

    constructor(favourites){
        this.favourites = favourites;
        if (this.favourites == null) {
            this.favourites = new Array();
        } else {
            this.favourites = JSON.parse(this.favourites);
        }
    }

    setFavourite(favourite){
        let key = $.inArray(favourite, this.favourites);
        if (key == -1) {
            this.favourites.push(favourite);
        }
    }

    deleteFavourite(favourite) {
        let key = $.inArray(favourite, this.favourites);
        if (key != -1) {
            this.favourites.splice(key, 1);
        }
    }

    existFavourite(valor){
        let key = $.inArray(valor, this.favourites);
        if (key == -1) return false;
        else return true; 
    }

    saveFavourites(){
        //guardo el favorito en variable localstore
        localStorage.setItem('favourites', JSON.stringify(this.favourites));
    }

    listFavourites(){
        return this.favourites;
    }
}