import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SelecaoForm } from './components/selecao-form/selecao-form';
import { SelecaoList } from './components/selecao-list/selecao-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { JogadorForm } from './components/jogador-form/jogador-form';
import { JogadorList } from './components/jogador-list/jogador-list';
import { PartidaForm } from './components/partida-form/partida-form';
import { PartidaList } from './components/partida-list/partida-list';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    SelecaoForm,
    SelecaoList,
    JogadorForm,
    JogadorList,
    PartidaForm,
    PartidaList,
    Home,
    Navbar,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
