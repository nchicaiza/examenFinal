import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import { Pelicula, PeliculaService} from "./pelicula.service";
import {PeliculaPipe} from "../pipes/pelicula.pipe";
import { PELICULA_SCHEMA} from "./pelicula.schema";

@Controller('Pelicula')
export class PeliculaController {

    constructor(private  peliculaService: PeliculaService){

    }

    //Body params
    @Post('registrar')
    crearPelicula(@Body(new PeliculaPipe(PELICULA_SCHEMA)) bodyParams){
        const peliculaNueva = new  Pelicula(
            bodyParams.idPelicula,
            bodyParams.nombre,
            bodyParams.anioLanzamiento,
            bodyParams.rating,
            bodyParams.actoresPrincipales,
            bodyParams.actorId,
            bodyParams.urlFotoPelicula,
            bodyParams.actorIdIdActor,
        );

        return this.peliculaService.crearPelicula(peliculaNueva);

    }

    @Get('crearPelicula')
    registrarAllMateria(
        @Res () response,
        @Req () request){
        this.peliculaService.crearTodasPeliculas()
        return response.status(202).send('Peliculas Creadas');
    }

    @Get('mostrarPelicula')
    listarTodosLasPeliculas(
        @Res () response,
        @Req () request){
        var promise = Promise.resolve(this.peliculaService.listarPeliculas())

        promise.then(function (value) {
            if(value.length === 0){
                return response.send({
                    mensaje:'No existe ninguna Pelicula',
                    estado: HttpStatus.NOT_FOUND + ' Not found',
                });
            }
            else{
                return response.status(202).send(value);
            }
        });
    }


    @Get('/:id')
    mostrarUnaPelicula(
        @Res () response,
        @Req () request,
        @Param() params){
        let arregloPelicula = this.peliculaService.obtenerUno(params.id);
        if(arregloPelicula){
            return response.send(arregloPelicula);
        } else{
            console.log('no encontrada');
            return response.status(400).send({
                mensaje:'Pelicula no encontrada',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                URL:request.originalUrl,
            });
        }
    }

    @Put('/:id')
    modificarPelicula(
        @Res () response,
        @Req () request,
        @Param() params,
        @Body(new PeliculaPipe(PELICULA_SCHEMA)) body){
        let arregloPelicula = this.peliculaService.obtenerUno(params.id);
        if(arregloPelicula){
            return response.send(
                this.peliculaService.editarUno(
                    params.id,
                    body.idPelicula,
                    body.nombre,
                    body.anioLanzamiento,
                    body.rating,
                    body.actoresPrincipales,
                    body.actorId,
                    body.urlFotoPelicula,

                ));
        } else{
            return response.send({
                mensaje:'Pelicula no encontrado. No se puede modificar',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                url:request.path,
            });
        }
    }
}