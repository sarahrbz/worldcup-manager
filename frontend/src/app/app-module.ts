import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SelecaoForm } from './components/selecao-form/selecao-form';
import { SelecaoList } from './components/selecao-list/selecao-list';

@NgModule({
  declarations: [
    App,
    SelecaoForm,
    SelecaoList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
