import {Injectable} from "@nestjs/common";
import {ActorEntity} from "./actor.entity";
import {ActorData} from "./actor.data";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


@Injectable()
export class ActorService {

    constructor(
        @InjectRepository(ActorEntity)
        private readonly actotRepository: Repository<ActorEntity>
    ){}
    actores: Actor[] = [];

    //Metodo Listar Todos los estudiante
    async listarActor(): Promise<ActorEntity[]>{
        //console.log(await this.pacienteRepository.find());
        return (await this.actotRepository.find());
    }

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

        this.actotRepository.save(act);
    }

    crearTodosActores(){

        for (var indice in ActorData){
            const actor = new ActorEntity();

            actor.nombres = ActorData[indice].nombres;
            actor.apellidos = ActorData[indice].apellidos;
            actor.fechaNacimiento = new Date(ActorData[indice].fechaNacimiento);
            actor.numeroPeliculas = ActorData[indice].numeroPeliculas;
            actor.retirado= ActorData[indice].retirado;
            actor.urlFotoActor= ActorData[indice].urlFotoActor;
            actor.usuarioFK = parseInt(ActorData[indice].usuarioFKIdUsuario);

            this.actotRepository.save(actor);
        }
    }

    obtenerUno(actorID){
        console.log(this.actores[actorID]);
        return this.actores[actorID];

    }

    editarUno(id, nombres, apellidos, fechaNacimiento, numeroPeliculas, retirado, urlFotoAct){
        let actorActualizado = this.obtenerUno(id);

        actorActualizado.nombres = nombres;
        actorActualizado.apellidos = apellidos;
        actorActualizado.fechaNacimiento = fechaNacimiento;
        actorActualizado.numeroPeliculas = numeroPeliculas;
        actorActualizado.retirado = retirado;
        actorActualizado.urlFotoActor = urlFotoAct;

        return actorActualizado;
    }
}

export  class Actor {

    constructor(
        public id: number,
        public nombres: string,
        public apellidos: string,
        public fechaNacimiento: string,
        public numeroPeliculas: number,
        public retirado: boolean,
        public urlFotoActor:string,
        public usuarioFKIdUsuario:number,
    ){};

}