import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import { DirectorComponent } from './director/director.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import {CredencialesService} from "./servicios/credenciales.service";
import {AutorizacionService} from "./servicios/autorizacion.service";
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    DirectorComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [AutorizacionService, CredencialesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
