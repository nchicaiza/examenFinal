import {Injectable} from "@nestjs/common";


@Injectable()
export class ActorService {

    arregloActores: Actor[] = [];

    crearActor(actor: Actor): Actor[]{
        this.arregloActores.push(actor);
        return this.arregloActores;
    }

    listarTodos(){
        return this.arregloActores;
    }

    obtenerUno(id){
        const actorEncontrado = this.arregloActores.find(autor => autor.id === id);
        return actorEncontrado;

    }

    editarUno(id, nombres, apellidos, fechaNacimiento, numeroPeliculas, retirado){
        let index = this.arregloActores.findIndex(actor => actor.id === id);
        let actorEditado = this.arregloActores[index];
        actorEditado.nombres = nombres;
        actorEditado.apellidos = apellidos;
        actorEditado.fechaNacimiento = fechaNacimiento;
        actorEditado.numeroPeliculas = numeroPeliculas;
        actorEditado.retirado = retirado;

        return actorEditado;
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
    ){};

}