import {Injectable} from "@nestjs/common";


@Injectable()
export class PeliculaService {

    arregloPeliculas: Pelicula[] = [];

    crearPelicula(pelicula: Pelicula): Pelicula[]{
        this.arregloPeliculas.push(pelicula);
        return this.arregloPeliculas;
    }

    listarTodos(){
        return this.arregloPeliculas;
    }

    obtenerUno(id){
        const peliculaEncontrada = this.arregloPeliculas.find(pelicula => pelicula.id === id);
        return peliculaEncontrada;
    }

    editarUno(id, idPelicula, nombre, anioLanzamiento, rating, actoresPrincipales, sinopsis, actorId){
        let actorEditadi = this.obtenerUno(id);

        actorEditadi.idPelicula = idPelicula;
        actorEditadi.nombre = nombre;
        actorEditadi.anioLanzamiento = anioLanzamiento;
        actorEditadi.rating = rating;
        actorEditadi.actoresPrincipales = actoresPrincipales;
        actorEditadi.sinopsis = sinopsis;
        actorEditadi.actorId= actorId;

        return actorEditadi;
    }

}


export class Pelicula {

    constructor(
        public id: number,
        public idPelicula: number,
        public nombre: string,
        public anioLanzamiento: number,
        public rating: number,
        public actoresPrincipales: string,
        public sinopsis: string,
        public actorId: number,
    ){};
}