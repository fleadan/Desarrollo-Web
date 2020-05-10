import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/modules/modulos-secundarios/contenidof/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public localStorageService:LocalStorageService) { }

  ngOnInit(): void 
  {
    this.localStorageService.storeOnLocalStorage('Diego Ramírez');
  }

}
