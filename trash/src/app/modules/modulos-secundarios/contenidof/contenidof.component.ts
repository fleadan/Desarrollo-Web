import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-contenidof',
  templateUrl: './contenidof.component.html',
  styleUrls: ['./contenidof.component.css']
})

export class ContenidofComponent implements OnInit {

  usuarios;
  numBote: string = "1234";
  boteSeleccion;
  botes=[
    {name:"Inorgánica", num:"1234",description: 'Basura que no se puede reciclar y/o bolsas de plastico'},
    {name:"Orgánica", num:"2345", description:'Desperdicios de comida'},
    {name:"Vidrio", num:"3456",description: 'Botellas de vidrio'},
    {name:"PET", num:"4567",description: 'Botellas de plástico'},
    {name:"Cascajo", num:"5678",description: 'Desechos de construcción'},
    {name:"Metal", num:"6789",description: 'Partes metálicas dañadas o oxidadas'},
    {name:"Baterias", num:"7891",description: 'Cargadores o equipos electrónicos'},
    {name:"Papel", num:"8912",description: 'Folletos, libretas, etc.'}];

  constructor(private localStorageService: LocalStorageService ) { }

  ngOnInit(): void {
  }


  onSelect(bote): void{
    this.numBote = bote.name;
    this.boteSeleccion = bote;
  }

  load()
  {
    this.usuarios = this.localStorageService.readLocalStorage();
  }
}
