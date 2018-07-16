import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {Actor, ActorService } from "./actor.service";
import {ActorPipe} from "../pipes/actor.pipe";
import {ACTOR_SCHEMA} from "./actor.schema";


@Controller('Actor')
export  class ActorController {

    constructor(private  actorService: ActorService){

    }
    //Body params
    @Post('registrar')
    crearActor(@Body(new ActorPipe(ACTOR_SCHEMA)) bodyParams) {
            const actorNuevo = new Actor(
               // bodyParams.id,
                bodyParams.nombres,
                bodyParams.apellidos,
                bodyParams.fechaNacimiento,
                bodyParams.numeroPeliculas,
                bodyParams.retirado,
                bodyParams.urlFotoActor,
                bodyParams.usuarioFKIdUsuario,
            );
            return this.actorService.crearActor(actorNuevo);
    }

    @Get('crearActor')
    registrarAllActor(
        @Res () response,
        @Req () request){
        this.actorService.crearTodosActores()
        return response.status(202).send('Actores Creados');
    }

    @Get('mostrarActor')
    listarTodosLosActores(
        @Res () response,
        @Req () request){
        var promise = Promise.resolve(this.actorService.listarActor());
        promise.then(function (value) {
            if(value.length === 0){
                return response.send({
                    mensaje:'No existe ningun actor',
                    estado: HttpStatus.NOT_FOUND + ' Not found',
                });
            }
            else{
                return response.status(202).send(value);
            }
        });
    }


    @Get('/:id')
    mostrarActor(
        @Res () response,
        @Req () request,
        @Param() params){

        let arregloActor = this.actorService.obtenerUno(params.id_actor);
        if(arregloActor){
            return response.send(arregloActor);
        } else{
            console.log('no encontrado');
            return response.status(400).send({
                mensaje:'Actor no encontrado',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                URL:request.originalUrl,
                //cabeceras: request.headers,
            });
        }
    }

    @Put('/:id') //Uso pipe
    modificarActor(
        @Res () response,
        @Req () request,
        @Param() params,
        @Body(new ActorPipe(ACTOR_SCHEMA)) body){
        let arregloActor = this.actorService.obtenerUno(params.id);
        if(arregloActor) {
            return response.send(
                this.actorService.editarUno(
                    params.id_estudiante,
                    body.nombres,
                    body.apellidos,
                    body.fechaNacimiento,
                    body.numeroPeliculas,
                    body.retirado,
                    body.urlFotoActor
                ));
        } else{
            return response.send({
                mensaje:'Actor no encontrado. No se puede modificar',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                url:request.path,
               //headers: request.headers,
            });
        }
    }
}

