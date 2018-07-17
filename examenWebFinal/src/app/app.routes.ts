import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {TransferenciaComponent} from "./transferencia/transferencia.component";
import {LoginComponent} from "./login/login.component";
import {ActorComponent} from "./actor/actor.component";
import {DirectorComponent} from "./director/director.component";

export const routes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'actor/:idactor',component:ActorComponent},
  {path:'actor/:idactor/:pelicula/:idpelicula',component:DirectorComponent},
  {path:'transferencias',component:TransferenciaComponent},

];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
