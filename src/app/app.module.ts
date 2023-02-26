import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodasNoticiasComponent } from './components/noticias/todas-noticias/todas-noticias.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { TodasEmpresasComponent } from './components/empresas/todas-empresas/todas-empresas.component';
import { EncontranosComponent } from './components/encontranos/encontranos.component';
import { TodosTalleresComponent } from './components/talleres/todos-talleres/todos-talleres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    NoticiasComponent,
    TalleresComponent,
    EmpresasComponent,
    FooterComponent,
    TodasNoticiasComponent,
    QuienesSomosComponent,
    TodasEmpresasComponent,
    EncontranosComponent,
    TodosTalleresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
