import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  private datosEnviados = new Subject <string>();
  private datosRecibidos = new Subject<string>();


  datoEnv = this.datosEnviados.asObservable();
  datoRec = this.datosRecibidos.asObservable();


  constructor() { }

  recepcionDeDatos(dato: string){
    this.datosRecibidos.next(dato);

  }
  confirmacionDeData(dato:string){
    this.datosEnviados.next(dato);
  }
}
