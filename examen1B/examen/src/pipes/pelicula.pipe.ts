import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';

@Injectable()
export class PeliculaPipe implements PipeTransform{
    constructor (private readonly _schema){
    }
    transform(valorPeliculaRequest: any,
              metadata: ArgumentMetadata){
        const {error} = Joi.
        validate(valorPeliculaRequest,
            this._schema)
        if(error){
            throw  new PeticionInvalidaException(
                {
                    erorr: error,
                    mensaje: 'Datos Incorrectos Libro',
                },
                10
            )
        } else{
            return valorPeliculaRequest;
        }
    }
}