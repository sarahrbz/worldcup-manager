import { Component, OnInit, signal } from '@angular/core';
import { Jogador } from '../../models/jogador';
import { JogadorService } from '../../services/jogador-service';
import { Router } from '@angular/router';

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

  constructor(private jogadorService: JogadorService, private router: Router) { }

  ngOnInit(): void {
    this.jogadorService.getAllJogadores().subscribe({
      next: json => {this.jogadores.set(json),
      this.jogadoresFiltrados.set(json)} // Inicializa os jogadores filtrados com todos os jogadores
    });
  }

  filtrarPorSelecao() {
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
    this.jogadorService.delete(jogador).subscribe({
      next: () => {
        this.jogadores.update(jogadores => jogadores.filter(j => j.id !== jogador.id));

        this.filtrarPorSelecao();
      },
      error: (err) => {
        console.error(err);
        alert('Não foi possível excluir o jogador.');
      }
    });
  }

}
