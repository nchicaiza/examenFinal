import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ActorEntity} from "./actor.entity";
import {UsuarioData} from "../usuario/usuario.data";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {ActorData} from "./actor.data";
import {PeliculaEntity} from "../pelicula/pelicula.entity";

@Injectable()

export class ActorService {

    constructor(
        @InjectRepository(ActorEntity)
        private readonly actorRepository: Repository<ActorEntity>
    ){}
    actores: Actor[] = [];

    //Metodo Listar Todos los actores
    async listarActor(): Promise<ActorEntity[]>{
        return (await this.actorRepository.find());
    }

    //Metodo Crear actores
    crearActor(actor: Actor){

        const act = new ActorEntity();
        act.nombres = actor.nombres;
        act.apellidos = actor.apellidos;
        const fecha = new Date(actor.fechaNacimiento);
        act.fechaNacimiento = fecha;
        act.numeroPeliculas = actor.numeroPeliculas;
        act.retirado = actor.retirado;
        act.urlFotoActor = actor.urlFotoActor;
        act.usuarioFK = actor.usuarioFKIdUsuario;

        this.actorRepository.save(act);
    }

    crearTodosActores(){

        for (var indice in ActorData){
            const actor = new ActorEntity();

            actor.nombres = ActorData[indice].nombres;
            actor.apellidos = ActorData[indice].apellidos;
            actor.fechaNacimiento = new Date(ActorData[indice].fechaNacimiento);
            actor.numeroPeliculas = ActorData[indice].numeroPeliculas;
            actor.retirado = ActorData[indice].retirado;
            actor.urlFotoActor = ActorData[indice].urlFotoActor;
            actor.usuarioFK = parseInt(ActorData[indice].usuarioFKIdUsuario);

            this.actorRepository.save(actor);
        }
    }


    //Metodo obtener un actor
    obtenerUno(actorID){

        console.log(this.actores[actorID]);
        return this.actores[actorID];
    }

    //Metodo editar un actor
    editarUno(idAct, nombreAct, apellidoAct, fechaAct, numeroPeliculasAct, retiradoAct,urlFotoAct){
        let actorActualizado = this.obtenerUno(idAct);

        actorActualizado.nombres = nombreAct;
        actorActualizado.apellidos = apellidoAct;
        actorActualizado.fechaNacimiento = fechaAct;
        actorActualizado.numeroPeliculas = numeroPeliculasAct;
        actorActualizado.retirado = retiradoAct;
        actorActualizado.urlFotoActor = urlFotoAct;

        return actorActualizado;
    }
}

export class Actor {
    constructor(
        public nombres:string,
        public apellidos:string,
        public fechaNacimiento:string,
        public numeroPeliculas:number,
        public retirado:boolean,
        public urlFotoActor:string,
        public usuarioFKIdUsuario:number,
    ){};
}