import { Component, OnInit, signal } from '@angular/core';
import { Selecao } from '../../models/selecao';
import { SelecaoService } from '../../services/selecao-service';
import { Router } from '@angular/router'; // implementar navegação para edição

@Component({
  selector: 'app-selecao-list',
  standalone: false,
  templateUrl: './selecao-list.html',
  styleUrl: './selecao-list.css',
})
export class SelecaoList implements OnInit {

  selecoes = signal<Selecao[]>([]);

  paginaAtual = 1;
  itensPorPagina = 10;

  constructor(private service: SelecaoService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllSelecoes().subscribe(
      {
        next: json => this.selecoes.set(json)
      }
    );
  }

  get selecoesPaginadas(): Selecao[]{
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;

    return this.selecoes().slice(inicio, fim);
  }

  get totalPaginas(): number {
    return Math.ceil(
      this.selecoes().length / this.itensPorPagina
    )
  }

  update(selecao: Selecao) {
    this.router.navigate(['/selecao-form', selecao.id]); // Navega para o formulário de edição passando o ID da seleção
  }

  delete(selecao: Selecao) {
    this.service.delete(selecao).subscribe({
      next: () => {
        this.selecoes.update(selecoes => selecoes.filter(s => s.id !== selecao.id));

        if (
          this.paginaAtual > this.totalPaginas &&
          this.totalPaginas > 0
        ) {
          this.paginaAtual = this.totalPaginas;
        }
      },
      error: (err) => {
        console.error(err);
        alert('Não é possível excluir uma seleção que possui jogadores cadastrados.');
      }
    });
  }

}
