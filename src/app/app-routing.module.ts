import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodasEmpresasComponent } from './components/empresas/todas-empresas/todas-empresas.component';
import { HomeComponent } from './components/home/home.component';
import { TodasNoticiasComponent } from './components/noticias/todas-noticias/todas-noticias.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'todasnoticias', component: TodasNoticiasComponent},
  {path:'quienes-somos', component:QuienesSomosComponent},
  {path:'empresas', component:TodasEmpresasComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
