import { Component, OnInit, signal } from '@angular/core';
import { Partida } from '../../models/partida';
import { PartidaService } from '../../services/partida-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partida-list',
  standalone: false,
  templateUrl: './partida-list.html',
  styleUrl: './partida-list.css',
})
export class PartidaList implements OnInit {

  partidas = signal<Partida[]>([]);

  constructor(private partidaService: PartidaService, private router: Router) {}
  ngOnInit(): void {
    this.partidaService.getAllPartidas().subscribe({
      next: json => this.partidas.set(json)
    });
  }

  update(partida: Partida) {
    this.router.navigate(['/partida-form', partida.id]); // Navega para o formulário de edição passando o ID da partida
  }

  delete(partida: Partida) {
    this.partidaService.delete(partida).subscribe({
      next: () => {
        this.partidas.update(partidas => partidas.filter(p => p.id !== partida.id));
      },
      error: (err) => {
        console.error(err);
        alert('Não foi possível excluir a partida.');
      }
    });
  }

}
