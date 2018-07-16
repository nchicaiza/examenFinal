import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ActorEntity} from "../actor/actor.entity";

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id_usuario: number;
    @Column()
    nombre_usuario: string;
    @Column()
    urlFoto: string;

    @OneToMany(
        type => ActorEntity,
        usuarioEntity => usuarioEntity.usuarioFK)
    actorId: number;


}