
import * as Joi from 'joi';

export const PELICULA_SCHEMA = Joi.object().keys({

        id: Joi.number(),
        idPelicula: Joi.number(),
        nombre: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
        anioLanzamiento: Joi.number(),
        rating: Joi.number(),
        actoresPrincipales: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(100),
        sinopsis: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(100),
        actorId: Joi.number(),
    });