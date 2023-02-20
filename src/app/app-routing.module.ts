import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodasNoticiasComponent } from './components/noticias/todas-noticias/todas-noticias.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'todasnoticias', component: TodasNoticiasComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
