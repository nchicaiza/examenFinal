import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";

@Injectable()
export class ActorPipe implements PipeTransform {
    constructor(private readonly _schema) {
    }

    transform(valorAutorRequest: any,
              metadata: ArgumentMetadata) {
        const {error} = Joi.validate(
            valorAutorRequest,
            this._schema);
        if (error) {
            throw  new PeticionInvalidaException(
                {
                    error: error,
                    mensaje: 'Datos Incorrectos Actor',
                },
                10
            )
        } else {
            return valorAutorRequest;
        }
    }
}
