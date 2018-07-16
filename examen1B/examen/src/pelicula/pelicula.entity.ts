import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ActorEntity} from "../actor/actor.entity";


@Entity('pelicula')
export class MateriaEntity {

    @PrimaryGeneratedColumn()
    id_materia: number;
    @Column()
    codigo: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @Column()
    activo: string;
    @Column()
    fechaCreacion: Date;
    @Column()
    numeroHorasSemana: number;
    @Column()
    urlFotoMateria: string;

    @ManyToOne(
        type => ActorEntity,
        peliculaEntity => peliculaEntity.peliculaId)
    estudianteId: number;

}