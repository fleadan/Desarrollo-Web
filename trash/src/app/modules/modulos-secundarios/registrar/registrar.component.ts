import { Component, OnInit } from '@angular/core';
import { BotesService } from '../services/botes.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

desBote: string = "Basura que no se puede reciclar y/o bolsas de plastico";
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

    constructor(private boteService: BotesService) { }

    ngOnInit(): void {
    }
    onSelect(bote): void{
      this.desBote = bote.description;
      this.boteSeleccion = bote;
    }

    sand(){
      
      this.boteService.numeBote = '5673';
    }
}
