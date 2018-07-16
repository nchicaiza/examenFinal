import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ActorEntity} from "../actor/actor.entity";

@Entity('pelicula')
export class PeliculaEntity {

    @PrimaryGeneratedColumn()
    idPelicula: number;
    @Column()
    nombre: string;
    @Column()
    anioLanzamiento: number;
    @Column()
    rating:number
    @Column()
    actoresPrincipales:string
    @Column()
    actorId:number;
    @Column()
    urlFotoPelicula: string;

    @ManyToOne(
        type => ActorEntity,
        peliculaEntity => peliculaEntity.peliculaId)
    actorId: number;

}
