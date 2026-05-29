import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecaoForm } from './components/selecao-form/selecao-form';

const routes: Routes = [
  {
  path: 'selecao-form',
  component: SelecaoForm // Rota para criar uma nova seleção
},
{
  path: 'selecao-form/:id',
  component: SelecaoForm // Rota para editar uma seleção existente, passando o ID como parâmetro
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
