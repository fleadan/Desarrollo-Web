import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../contenidof/services/welcome.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../contenidof/services/local-storage.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios;
  sub:Subscription
  wc1:string;
  constructor(private welcomeService: WelcomeService, private dataService: DataService) {
    this.sub = welcomeService.datoEnv.subscribe(wc1 => {this.wc1=wc1});
   }

  ngOnInit(): void {
  }

  enviar(){
    this.welcomeService.recepcionDeDatos('hols');
    this.dataService.nombreUsuario = 'Diego';
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
