import { Component, OnInit } from '@angular/core';

import { trigger, state,style, transition,animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
  animations: [
    trigger('myButton',[
        state('small',style({height:'0px'})),
        state('large',style({height:'120px'})),
        transition ('small <=> large', animate('400ms ease-in'))
      ])
  ]
})
export class ContenidoComponent implements OnInit {
  state: string='small';
  animateMe(){
    this.state=(this.state==='small'?'large':'small');
  }
  constructor() { }

  ngOnInit(): void {
  }
}



