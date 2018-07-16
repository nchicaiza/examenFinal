import {UsuarioEntity} from "../usuario/usuario.entity";

import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('actor')
export class ActorEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombres: string;
    @Column()
    apellidos: string;
    @Column()
    fechaNacimiento: Date;
    @Column()
    numeroPeliculas: number;
    @Column()
    retirado: boolean;
    @Column()
    urlFotoActor: string;
    @ManyToOne(
        type => UsuarioEntity,
        actorEntity => actorEntity.actorId)
    usuarioFK: number;

    @OneToMany(
        type => PeliculaEntity,
        actorEntity => actorEntity.actorId)
     peliculaId: number;

}