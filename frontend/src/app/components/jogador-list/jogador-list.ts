import { Component, OnInit, signal } from '@angular/core';
import { Jogador } from '../../models/jogador';
import { JogadorService } from '../../services/jogador-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jogador-list',
  standalone: false,
  templateUrl: './jogador-list.html',
  styleUrl: './jogador-list.css',
})
export class JogadorList implements OnInit {

  jogadores = signal<Jogador[]>([]);
  jogadoresFiltrados = signal<Jogador[]>([]);
  filtroSelecao = '';

  paginaAtual = 1;
  itensPorPagina = 10;
  constructor(private jogadorService: JogadorService, private router: Router) { }

  ngOnInit(): void {
    this.jogadorService.getAllJogadores().subscribe({
      next: json => {this.jogadores.set(json),
      this.jogadoresFiltrados.set(json)} // Inicializa os jogadores filtrados com todos os jogadores
    });
  }

  get jogadoresPaginados(): Jogador[] {
  const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
  const fim = inicio + this.itensPorPagina;

  return this.jogadoresFiltrados().slice(inicio, fim);
}

  get totalPaginas(): number {
  return Math.ceil(
    this.jogadoresFiltrados().length / this.itensPorPagina
  );
}

  filtrarPorSelecao() {
  this.paginaAtual = 1;
  if (!this.filtroSelecao) {
    this.jogadoresFiltrados.set(this.jogadores());
    return;
  }

  this.jogadoresFiltrados.set(
    this.jogadores().filter(
      j => j.selecaoName === this.filtroSelecao
    )
  );
}

selecoesUnicas(): string[] {
  return [...new Set(
    this.jogadores().map(j => j.selecaoName)
  )];
}

  update(jogador: Jogador) {
    this.router.navigate(['/jogador-form', jogador.id]); // Navega para o formulário de edição passando o ID do jogador
  }

  delete(jogador: Jogador) {
    Swal.fire({
          title: 'Tem certeza ?',
          text: `Deseja excluir ${jogador.name}?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#dc3545',
          cancelButtonColor: '#6c757d',
          confirmButtonText: 'Sim, excluir',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if(result.isConfirmed){
            this.jogadorService.delete(jogador).subscribe({
      next: () => {
        this.jogadores.update(jogadores => jogadores.filter(j => j.id !== jogador.id));

        this.filtrarPorSelecao();

        Swal.fire(
                  'Excluída!',
                  'Jogador removido com sucesso.',
                  'success'
                );


      },
      error: () => {
        Swal.fire(
                  'Erro!',
                  'Não foi possível excluir o jogador.',
                  'error'
                );

      }
    });

          }
        });


  }

}
