import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PeliculaController} from "./pelicula/pelicula.controller";
import {ActorController} from "./actor/actor.controller";
import {AutorizacionController} from "./controladores/autorizacion.controller";
import {ActorService} from "./actor/actor.service";
import {PeliculaService} from "./pelicula/pelicula.service";

@Module({
  imports: [],
  controllers: [AppController, ActorController, PeliculaController, AutorizacionController],
  providers: [AppService, ActorService, PeliculaService],
})
export class AppModule {}
