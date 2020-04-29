import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modulosP/header/header.component';
import { FooterComponent } from './modulosP/footer/footer.component';
import { HomePComponent } from './modulosP/home-p/home-p.component';
import { ContenidoComponent } from './modulosP/contenido/contenido.component';
import { MenuComponent } from './modulosP/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePComponent,
    ContenidoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
