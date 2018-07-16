import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {Materia, PeliculaService} from "./pelicula.service";
import {PeliculaPipe} from "../pipes/pelicula.pipe";
import {MATERIA_SCHEMA} from "./pelicula.schema";

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

    @Get('mostrarMateria')
    listarTodosLasMaterias(@Res () response, @Req () request){
        var promise = Promise.resolve(this.materiaService.listarMateria())

        promise.then(function (value) {
            if(value.length === 0){
                return response.send({
                    mensaje:'No existe ninguna Materia',
                    estado: HttpStatus.NOT_FOUND + ' Not found',
                });
            }
            else{
                return response.status(202).send(value);
            }
        });
    }


    @Get('/:id')
    mostrarUnMateria(@Res () response, @Req () request, @Param() params){
        let arregloMateria = this.materiaService.obtenerUno(params.id);
        if(arregloMateria){
            return response.send(arregloMateria);
        } else{
            console.log('no encontrado');
            return response.status(400).send({
                mensaje:'Materia no encontrado',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                URL:request.originalUrl,
            });
        }
    }

    @Put('/:id')
    modificarMateria(@Res () response, @Req () request, @Param() params, @Body(new PeliculaPipe(MATERIA_SCHEMA)) body){
        let arregloMateria = this.materiaService.obtenerUno(params.id);
        if(arregloMateria){
            return response.send(
                this.materiaService.editarUno(
                    params.id,
                    body.codigo,
                    body.nombre,
                    body.descripcion,
                    body.activo,
                    body.fechaCreacion,
                    body.numeroHorasSemana,
                    body.urlFotoMateria,
                    body.materiaId,
                ));
        } else{
            return response.send({
                mensaje:'Materia no encontrado. No se puede modificar',
                estado:HttpStatus.NOT_FOUND + ' Not found',
                url:request.path,
            });
        }
    }
}