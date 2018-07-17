import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {
  estaLogeado = false;
  usuario1 = 'nelson.chicaiza@epn.edu.ec';
  constructor() {
  }
  login(usuario: string, contrasena: string) {
    if (usuario === 'nelson.chicaiza@epn.edu.ec' && contrasena === 'nchicaiza') {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }

  }
}
