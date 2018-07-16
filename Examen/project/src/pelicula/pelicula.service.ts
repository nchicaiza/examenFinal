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


        this.materiaRepository.save(mat);
    }

    crearTodosMaterias(){
        for (var indice in PeliculaData){
            const mat = new PeliculaEntity();
            mat.codigo = PeliculaData[indice].codigo;
            mat.nombre = PeliculaData[indice].nombre;
            mat.descripcion = PeliculaData[indice].descripcion;
            mat.activo = PeliculaData[indice].activo;
            mat.fechaCreacion = new Date(PeliculaData[indice].fechaCreacion);
            mat.urlFotoMateria = PeliculaData[indice].urlFotoMateria;
            mat.numeroHorasSemana = parseInt(PeliculaData[indice].numeroHorasSemana);
            mat.estudianteId = parseInt(PeliculaData[indice].estudianteIdIdEstudiante);

            this.materiaRepository.save(mat);
        }
    }

    //Metodo obtener un medicamento
    obtenerUno(materiaID){

        console.log(this.materias[materiaID]);
        return this.materias[materiaID];
    }

    //Metodo editar un medicamento
    editarUno(materiaID, codigo, nombre, descripcion, activo, fechaCreacion, numeroHorasSemana,urlFotoMateria, estudianteId){
        let materiaActualizado = this.obtenerUno(materiaID);

        materiaActualizado.codigo = codigo;
        materiaActualizado.nombre = nombre;
        materiaActualizado.descripcion = descripcion;
        materiaActualizado.activo = activo;
        materiaActualizado.fechaCreacion = fechaCreacion;
        materiaActualizado.numeroHorasSemana = numeroHorasSemana;
        materiaActualizado.urlFotoMateria = urlFotoMateria;
        materiaActualizado.estudianteIdIdEstudiante = estudianteId;

        return materiaActualizado;
    }

}


export class Materia {
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