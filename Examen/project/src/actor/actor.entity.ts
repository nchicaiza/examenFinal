import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {PeliculaEntity} from "../pelicula/pelicula.entity";

@Entity('actor')
export class ActorEntity {

    @PrimaryGeneratedColumn()
    id_actor: number;
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