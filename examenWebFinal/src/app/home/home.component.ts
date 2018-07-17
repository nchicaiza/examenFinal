import { Component, EventEmitter, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickEnBuscar:EventEmitter<object> = new EventEmitter();
  actores;
  peliculas;
  usuarios;
  searchText:string;
  arrayNombresActores=[];
  arrayNombresPeliculas=[];
  arrayNombresUsuarios=[];

  j:string;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    const observableUsuario$ = this._httpClient
      .get('http://localhost:3000/Usuario/mostrarUsuarios');
    observableUsuario$
      .subscribe(
        results=>{
          console.log(results);
          this.usuarios= results;
          this.llenarUsuarios();

        },
        (error)=> {
          console.log('Error', error);
        },
        ()=> {
          console.log('COMPLETO!')
        }
      );

    const observableActor$ = this._httpClient
      .get('http://localhost:3000/Actor/mostrarActor');

    observableActor$

      .subscribe(
        results=>{
          console.log(results);
          this.actores=results;
          this.llenarActores();

        },
        (error)=>{
          console.log('Error', error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );

    const observablePelicula$ = this._httpClient
      .get('http://localhost:3000/Pelicula/mostrarPelicula')

    observablePelicula$
      .subscribe(
        results=> {
          console.log(results);
          this.peliculas = results;
          this.llenarPelicula()
        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );
  }
  llenarUsuarios(){
    for(var i=0; i<this.usuarios.lenght; i++) {
      this.arrayNombresUsuarios.push(this.usuarios[i].nombre_usuario);
    }
  }

  llenarActores(){
    for(var i=0; i<this.actores.lenght; i++) {
      this.arrayNombresActores.push(this.actores[i].nombres);
    }
  }

  llenarPelicula(){
    for(var i=0; i<this.peliculas.lenght; i++) {
      this.arrayNombresPeliculas.push(this.peliculas[i].nombre);
    }
  }


}
