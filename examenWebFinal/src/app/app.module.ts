import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DitectorComponent } from './ditector/ditector.component';
import { DirectorComponent } from './director/director.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    DitectorComponent,
    DirectorComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
