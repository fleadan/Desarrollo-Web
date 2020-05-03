import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ContenidofComponent } from './contenidof/contenidof.component';
import { ContenidoCComponent } from './contenido-c/contenido-c.component';
import { ContactComponent } from './contact/contact.component';
import { BajaComponent } from './baja/baja.component';
import { IndexRoutingModule } from './index-routing-module';
import { FormsModule } from '@angular/forms';
import { BarraComponent } from './barra/barra.component';
import { ChartsModule} from  'ng2-charts';


@NgModule({
  declarations: [LoginComponent, SigninComponent, RegistrarComponent, ContenidofComponent, ContenidoCComponent, ContactComponent, BajaComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class ModulosSecundariosModule { }
