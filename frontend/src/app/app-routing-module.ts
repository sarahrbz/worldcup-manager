import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecaoForm } from './components/selecao-form/selecao-form';
import { Home } from './components/home/home';
import { SelecaoList } from './components/selecao-list/selecao-list';
import { JogadorList } from './components/jogador-list/jogador-list';
import { JogadorForm } from './components/jogador-form/jogador-form';
import { PartidaForm } from './components/partida-form/partida-form';
import { PartidaList } from './components/partida-list/partida-list';

const routes: Routes = [
  {
    path: '',
    component: Home // Rota para a página inicial
  },
  {
    path: 'home',
    component: Home // Rota para a página inicial
  },
  {
  path: 'selecao-form',
  component: SelecaoForm // Rota para criar uma nova seleção
},
{
  path: 'selecoes',
  component: SelecaoList // Rota para listar as seleções

},
{
  path: 'selecao-form/:id',
  component: SelecaoForm // Rota para editar uma seleção existente, passando o ID como parâmetro
},
{
  path: 'jogador-form', // Rota para criar um novo jogador
  component: JogadorForm
},
{
  path: 'jogadores',
  component: JogadorList // Rota para listar os jogadores
},
{
  path: 'jogador-form/:id', // Rota para editar um jogador existente, passando o ID como parâmetro
  component: JogadorForm
},
{
  path: 'partida-form', // Rota para criar uma nova partida
  component: PartidaForm
},
{
  path: 'partidas', // Rota para listar as partidas
  component: PartidaList
},
{
  path: 'partida-form/:id', // Rota para editar uma partida existente, passando o ID como parâmetro
  component: PartidaForm
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
