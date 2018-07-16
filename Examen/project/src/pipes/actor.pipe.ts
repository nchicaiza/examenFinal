import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionIncorrectaException} from "../exceptions/peticion-incorrecta.exception";
import * as Joi from 'joi';

@Injectable()
export class ActorPipe implements PipeTransform{
    constructor (private readonly _schema){
    }

    transform(jsonValidarActor: any, metadata: ArgumentMetadata){
        const  {error}= Joi.validate(jsonValidarActor, this._schema);
        if(error){
            throw  new PeticionIncorrectaException(
                {
                    erorr: error,
                    mensaje: 'Json de Actor no valido',
                },
                10
            )
        }else{
            return jsonValidarActor;
        }

    }
}