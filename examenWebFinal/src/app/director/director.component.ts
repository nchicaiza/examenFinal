import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  actor;
  pelicula;
  _parametros:any;

  constructor( private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarActor();
    this.cargarPelicula();
  }

  cargarPelicula(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:3000/pelicula/mostrarPelicula?actorIdIdActor='+this._parametros.idequipo)
        .subscribe(
          (res)=>{
            this.pelicula=res;
            console.log(this.pelicula);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

  cargarActor(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:3000/Actor/mostrarActor?id='+this._parametros.idequipo)
        .subscribe(
          (res)=>{
            this.actor=res;
            console.log(this.actor);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }


}
