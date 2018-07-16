import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PeliculaEntity} from "./pelicula.entity";
import {Repository} from "typeorm";
import {ActorEntity} from "../actor/actor.entity";
import {PeliculaData} from "./pelicula.data";

@Injectable()
export class PeliculaService {

    constructor(
        @InjectRepository(PeliculaEntity)
        private readonly peliculaRepository: Repository<PeliculaEntity>
    ){}
    peliculas: Pelicula[] = [];

    //Metodo Listar Todos las peliculas
    async  listarPeliculas(): Promise<PeliculaEntity[]>{
        return (await this.peliculaRepository.find());
    }
    crearPelicula(pelicula: Pelicula){
        const pel = new PeliculaEntity();

       pel.idPelicula = pelicula.idPelicula;
       pel.nombre = pelicula.nombre;
       pel.anioLanzamiento = pelicula.anioLanzamiento;
       pel.rating = pelicula.rating;
       pel.actoresPrincipales = pelicula.actoresPrincipales;
       pel.actorId = pelicula.actorIdIdActor;
       pel.urlFotoPelicula = pelicula.urlFotoPelicula;

        this.peliculaRepository.save(pel);
    }

    crearTodasPeliculas(){
        for (var indice in PeliculaData){
            const pel = new PeliculaEntity();
            pel.idPelicula = PeliculaData[indice].idPelicula;
            pel.nombre = PeliculaData[indice].nombre;
            pel.anioLanzamiento = PeliculaData[indice].anioLanzamiento;
            pel.rating = PeliculaData[indice].rating;
            pel.actoresPrincipales = PeliculaData[indice].actoresPrincipales;
            pel.actorId = PeliculaData[indice].actorId;
            pel.urlFotoPelicula = PeliculaData[indice].urlFotoPelicula;
            pel.actorIdIdActor = PeliculaData[indice].actorIdIdActor;

            this.peliculaRepository.save(pel);
        }
    }

    //Metodo obtener un medicamento
    obtenerUno(peliculaID){

        console.log(this.peliculas[peliculaID]);
        return this.peliculas[peliculaID];
    }

    //Metodo editar un medicamento
    editarUno(peliculaID, idPelicula, nombre, anioLanzamiento, rating, actoresPrincipales, actorId,urlFotoPelicula){
        let peliculaActualizada = this.obtenerUno(peliculaID);

        peliculaActualizada.idPelicula = idPelicula;
        peliculaActualizada.nombre = nombre;
        peliculaActualizada.anioLanzamiento = anioLanzamiento;
        peliculaActualizada.rating = rating;
        peliculaActualizada.actoresPrincipales = actoresPrincipales;
        peliculaActualizada.actorId = actorId;
        peliculaActualizada.urlFotoPelicula = urlFotoPelicula;
        peliculaActualizada.actorIdIdActor = actorId;

        return peliculaActualizada;
    }

}


export class Pelicula {
    constructor(
        public idPelicula:number,
        public nombre:string,
        public anioLanzamiento:number,
        public rating:number,
        public actoresPrincipales:string,
        public actorId:number,
        public urlFotoPelicula:string,
        public actorIdIdActor:number,
    ){};
}