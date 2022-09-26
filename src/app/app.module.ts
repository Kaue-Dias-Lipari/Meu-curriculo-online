import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaContatoComponent } from './pagina-contato/pagina-contato.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { PaginaProjetosComponent } from './pagina-projetos/pagina-projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaInicialComponent,
    PaginaContatoComponent,
    TecnologiasComponent,
    PaginaProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
