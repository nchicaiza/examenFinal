import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionIncorrectaException} from "../exceptions/peticion-incorrecta.exception";
import * as Joi from 'joi';
@Injectable()
export class PeliculaPipe implements PipeTransform{
    constructor (private readonly _schema){
    }
    transform(jsonValidarPelicula: any, metadata: ArgumentMetadata){
        const  {error}= Joi.validate(jsonValidarPelicula, this._schema)
        if(error){
            //botar un error
            throw  new PeticionIncorrectaException(
                {
                    erorr: error,
                    mensaje: 'Json de Pelicula no valido',
                },
                10
            )
        } else{
            return jsonValidarPelicula;
        }
    }
}