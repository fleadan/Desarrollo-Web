import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ContenidoCComponent } from './contenido-c/contenido-c.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ContenidofComponent } from './contenidof/contenidof.component';
import { BajaComponent } from './baja/baja.component';
import { BarraComponent } from './barra/barra.component';

const rutas: Routes=[
    {path: 'conocenos', component: ContenidoCComponent, data: {animation: 'MeetPage'}},
    {path: 'barra', component: BarraComponent},
    {path: 'contactanos', component: ContactComponent},
    {path: 'index', component: ContenidoComponent, data: {animation: 'HomePage'}},
    {path: 'signin', component: SigninComponent},
    {path: 'login', component: LoginComponent},
    {path: 'find', component: ContenidofComponent},
    {path: 'baja', component: BajaComponent},
    {path: 'registrar', component: RegistrarComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(rutas)],
    exports:[RouterModule]
})
export class IndexRoutingModule{
}