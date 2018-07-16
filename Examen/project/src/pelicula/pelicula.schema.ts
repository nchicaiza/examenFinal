import * as Joi from 'joi';

export const PELICULA_SCHEMA = Joi
    .object()
    .keys({
        idPelicula:Joi.number().precision(2).required(),
        nombre: Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
        anioLanzamiento:Joi.number().integer().required(),
        rating:Joi.string().regex(/^[a-zA-Z,.' ' ]{4,50}$/).required(),
        actoresPrincipales:Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
        actorId:Joi.number().integer().required(),
        urlFotoPelicula:Joi.string().regex(/^[a-zA-Z0-9 ]{4,300}$/).required(),
        actorIdIdActor:Joi.number().integer().required(),
    });