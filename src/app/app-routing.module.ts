import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodasEmpresasComponent } from './components/empresas/todas-empresas/todas-empresas.component';
import { EncontranosComponent } from './components/encontranos/encontranos.component';
import { HomeComponent } from './components/home/home.component';
import { TodasNoticiasComponent } from './components/noticias/todas-noticias/todas-noticias.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { SociosComponent } from './components/socios/socios.component';
import { TodosTalleresComponent } from './components/talleres/todos-talleres/todos-talleres.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'todasnoticias', component: TodasNoticiasComponent},
  {path:'quienes-somos', component:QuienesSomosComponent},
  {path:'empresas', component:TodasEmpresasComponent},
  {path:'encontranos', component:EncontranosComponent},
  {path:'talleres', component:TodosTalleresComponent},
  {path:'socios', component:SociosComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
