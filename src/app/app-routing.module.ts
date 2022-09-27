import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaContatoComponent } from './pagina-contato/pagina-contato.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaProjetosComponent } from './pagina-projetos/pagina-projetos.component';

const routes: Routes = [
  {path: '', component: PaginaInicialComponent},
  {path: 'contato', component: PaginaContatoComponent},
  {path: 'projetos', component: PaginaProjetosComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
