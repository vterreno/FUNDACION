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
    TodasNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
