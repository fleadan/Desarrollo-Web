import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ContenidofComponent } from './contenidof/contenidof.component';
import { ContenidoCComponent } from './contenido-c/contenido-c.component';
import { ContactComponent } from './contact/contact.component';
import { BajaComponent } from './baja/baja.component';



@NgModule({
  declarations: [LoginComponent, SigninComponent, RegistrarComponent, ContenidofComponent, ContenidoCComponent, ContactComponent, BajaComponent],
  imports: [
    CommonModule
  ]
})
export class ModulosSecundariosModule { }
