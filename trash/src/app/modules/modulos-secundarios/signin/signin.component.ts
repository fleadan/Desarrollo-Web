import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  enviar(){
    this.dataService.nombreUsuario = 'Diego'
  }

}
