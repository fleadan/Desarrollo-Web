import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomePComponent } from './main-components/home-p/home-p.component';
import { MenuComponent } from './main-components/menu/menu.component';

import { registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import localeEn from '@angular/common/locales/en';

import { ModulosSecundariosModule } from './modules/modulos-secundarios/modulos-secundarios.module';
import { ContenidoComponent } from './modules/modulos-secundarios/contenido/contenido.component';
import { BarraComponent } from './modules/modulos-secundarios/barra/barra.component';
import { ChartsModule} from  'ng2-charts';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { StorageServiceModule } from 'ngx-webstorage-service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



registerLocaleData(localeEs,'es-MX');
registerLocaleData(localeEn,'en');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePComponent,
    MenuComponent,
    BarraComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ModulosSecundariosModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
