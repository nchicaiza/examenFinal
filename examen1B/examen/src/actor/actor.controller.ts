import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {ACTOR_SCHEMA} from "./actor.schema";
import {ActorPipe} from "../pipes/actor.pipe";
import {Actor, ActorService} from "./actor.service";


@Controller('Autor')
export class ActorController {

    constructor(private _actorService: ActorService){

    }

    @Get()
    listarTodos(@Res () response, @Req () request){

        var arregloActores = this._actorService.listarTodos();
        if (Object.keys(arregloActores).length === 0){
            return response.send({
                mensaje:'No existe ningun Actor',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(arregloActores);
        }
    }

    @Post()
    crearActor(@Body(new ActorPipe(ACTOR_SCHEMA)) bodyParams) {
        const actorNuevo = new Actor(
            bodyParams.id,
            bodyParams.nombres,
            bodyParams.apellidos,
            bodyParams.fechaNacimiento,
            bodyParams.numeroPeliculas,
            bodyParams.retirado,
        );
        return this._actorService.crearActor(actorNuevo);
    }

    @Get('/:id')
    obtenerUno(@Res () response, @Req () request, @Param() paramParams){

        const actor = this._actorService.obtenerUno(paramParams.id);
        if (actor){
            return response.send(actor);
        }
        else {
            return response.status(400).send({
                mensaje:'Actor no Existe',
                statusCode: HttpStatus.NOT_FOUND,
            });
        }
    }

    @Put('/:id')
    editarUno(@Res () response, @Req () request, @Param() paramParams,
              @Body(new ActorPipe(ACTOR_SCHEMA)) bodyParams){
        if (this._actorService.obtenerUno(paramParams.id)) {
            const actor = this._actorService.editarUno(paramParams.id,
                bodyParams.nombres,
                bodyParams.apellidos,
                bodyParams.fechaNacimiento,
                bodyParams.numeroPeliculas,
                bodyParams.retirado);
            return response.send(actor);
        }
        else {
            return response.status(400).send({
                mensaje: 'Actor no existe',
                statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }

}