
import { Component, OnInit, signal } from '@angular/core';
import { Partida } from '../../models/partida';
import { PartidaService } from '../../services/partida-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partida-list',
  standalone: false,
  templateUrl: './partida-list.html',
  styleUrl: './partida-list.css',
})
export class PartidaList implements OnInit {

  partidas = signal<Partida[]>([]);

  paginaAtual = 1;
  itensPorPagina = 5;

  constructor(private partidaService: PartidaService, private router: Router) {}
  ngOnInit(): void {
    this.partidaService.getAllPartidas().subscribe({
      next: json => this.partidas.set(json)
    });
  }

  get partidasPaginadas(): Partida[]{ // traz todas as partidas e faz a paginação do frontend usando o método slice()
    const inicio = (this.paginaAtual - 1 ) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;

    return this.partidas().slice(inicio, fim);
  }

  get totalPaginas(): number { // calcula automaticamente quantas páginas existem com base na quantidade de partidas cadastradas
    return Math.ceil(
      this.partidas().length / this.itensPorPagina
    )
  }

  update(partida: Partida) {
    this.router.navigate(['/partida-form', partida.id]); // Navega para o formulário de edição passando o ID da partida
  }

  delete(partida: Partida) {
    Swal.fire({
    title: 'Tem certeza?',
    text: 'Deseja excluir esta partida?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sim, excluir',
    cancelButtonText: 'Cancelar'
  }). then((result) => {

    if (result.isConfirmed) {

      this.partidaService.delete(partida).subscribe({

        next: () => {

          this.partidas.update(
            partidas => partidas.filter(
              p => p.id !== partida.id
            )
          );

          if ( // Caso apague o ultimo item da ultima pagina, é feita essa verificação para voltar automaticamente para a ultima página válida
            this.paginaAtual > this.totalPaginas &&
            this.totalPaginas > 0
          ) {
            this.paginaAtual = this.totalPaginas;
          }

          Swal.fire(
            'Excluída!',
            'Partida removida com sucesso.',
            'success'
          );

        },

        error: () => {

          Swal.fire(
            'Erro!',
            'Não foi possível excluir a partida.',
            'error'
          );

        }

      });

    }

  });
  }

}
