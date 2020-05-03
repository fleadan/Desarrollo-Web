import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModulosSecundariosModule} from './modules/modulos-secundarios/modulos-secundarios.module';
import{ PageNotFoundComponent} from './main-components/page-not-found/page-not-found.component';

const rutas: Routes=[
    {path: 'secundarios', loadChildren:'.modules/modulos-secundarios/modulos-secundarios.component#ModulosSecundariosModule'},
    {path: '**', component:PageNotFoundComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(rutas, {enableTracing:true})],
    exports:[RouterModule]
})
export class AppRoutingModule{
}