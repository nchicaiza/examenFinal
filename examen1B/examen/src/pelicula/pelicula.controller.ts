import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import { PeliculaPipe} from "../pipes/pelicula.pipe";
import {PELICULA_SCHEMA} from "./pelicula.schema";
import {Pelicula, PeliculaService} from "./pelicula.service";


@Controller('Pelicula')
export class PeliculaController {

    constructor(private _peliculaService: PeliculaService){
    }


    @Get()
    listarTodos(@Res () response,
                @Req () request){
        var arregloPeliculas = this._peliculaService.listarTodos();
        if(Object.keys(arregloPeliculas).length === 0){
            return response.send({
                mensaje:'No existe ninguna Pelicula',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(arregloPeliculas);
        }
    }

    @Post()
    crearPelicula(@Body(new PeliculaPipe(PELICULA_SCHEMA)) bodyParams) {
        const peliculaNuevo = new Pelicula(
            bodyParams.id,
            bodyParams.idPelicula,
            bodyParams.nombre,
            bodyParams.anioLanzamiento,
            bodyParams.rating,
            bodyParams.actoresPrincipales,
            bodyParams.sinopsis,
            bodyParams.actorId
        );
        return this._peliculaService.crearPelicula(peliculaNuevo);
    }

    @Get('/:id')
    obtenerUno(@Res () response,
               @Req () request,
               @Param() paramParams){

        const pelicula = this._peliculaService.obtenerUno(paramParams.id);
        if (pelicula) {
            return response.send(pelicula);
        }
        else {
            return response
                .status(400)
                .send({
                    mensaje: 'Pelicula No Existe',
                    statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }

    @Put('/:id')
    editarUno(@Res () response,
              @Req () request,
              @Param() paramParams,
              @Body(new PeliculaPipe(PELICULA_SCHEMA)) bodyParams){
        if(this.obtenerUno(response, request, paramParams)) {
            const libro = this._peliculaService.editarUno(paramParams.id,
                bodyParams.idPelicula,
                bodyParams.nombre,
                bodyParams.anioLanzamiento,
                bodyParams.rating,
                bodyParams.actoresPrincipales,
                bodyParams.sipnosis,
                bodyParams.actorId
            );
            return response.send(libro);
        }
        else {
            return response
                .status(400)
                .send({
                    mensaje: 'Pelicula No Existe',
                    statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }
}