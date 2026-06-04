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

  constructor(private jogadorService: JogadorService, private router: Router) { }

  ngOnInit(): void {
    this.jogadorService.getAllJogadores().subscribe({
      next: json => this.jogadores.set(json)
    });
  }

  update(jogador: Jogador) {
    this.router.navigate(['/jogador-form', jogador.id]); // Navega para o formulário de edição passando o ID do jogador
  }

  delete(jogador: Jogador) {
    this.jogadorService.delete(jogador).subscribe({
      next: () => {
        this.jogadores.update(jogadores => jogadores.filter(j => j.id !== jogador.id));
      },
      error: (err) => {
        console.error(err);
        alert('Não foi possível excluir o jogador.');
      }
    });
  }

}
