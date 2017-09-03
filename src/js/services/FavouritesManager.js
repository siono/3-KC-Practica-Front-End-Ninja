const $ = require('jquery');

export default class FavouritesManager{

    constructor(favouritesService){
        this.favouritesService = favouritesService;
    }

    setFavourite(favourite){
        this.favouritesService.setFavourite(favourite);
        console.log("Elemento " + favourite + " añadido a Favorito ");
        console.log("Favoritos:", this.listFavourites());
    }

    deleteFavourite(favourite){
        this.favouritesService.deleteFavourite(favourite);
        console.log("Elemento " + favourite + " eliminado ");
        console.log("Favoritos:", this.listFavourites());
    }

    clickFavourite(favourite,icon){
        if (this.existFavourite(favourite)){
            this.deleteFavourite(favourite);
        }else{
            this.setFavourite(favourite);
        }
        
        this.saveFavourites();
        
        icon.toggleClass("fa-heart fa-heart-o");
    }

    saveFavourites(){
        this.favouritesService.saveFavourites();
    }

    existFavourite(valor){
        return this.favouritesService.existFavourite(valor);
    }

    listFavourites(){
        return this.favouritesService.listFavourites();
    }

    loadClassLike(valor) {
        if (this.existFavourite(valor)) {
            return "fa fa-heart";
        } else {
            return "fa fa-heart-o";
        }
    }

    
}