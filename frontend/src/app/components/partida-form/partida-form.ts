import { FormGroup, FormBuilder } from '@angular/forms';
import { Selecao } from '../../models/selecao';
import { Partida } from './../../models/partida';
import { Component, OnInit, signal } from '@angular/core';
import { PartidaService } from '../../services/partida-service';
import { SelecaoService } from '../../services/selecao-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-partida-form',
  standalone: false,
  templateUrl: './partida-form.html',
  styleUrl: './partida-form.css',
})
export class PartidaForm implements OnInit {
  partidas = signal<Partida[]>([]);
  selecoes = signal<Selecao[]>([]);

  isEditing: boolean = false;

  mensagemErro = signal('');
  mensagemSucesso = signal('');

  formGroupPartida: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: PartidaService, private selecaoService: SelecaoService, private route: ActivatedRoute, private router: Router){
    this.formGroupPartida = this.formBuilder.group({
      id: [null],
      data: [''],
      estadio: [''],
      mandanteId: [null],
      visitanteId:[null],
      golsMandante: [0],
      golsVisitante: [0]
    });
  }
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');

      if(id){
        this.isEditing = true;

        this.service.getById(Number(id)).subscribe({
          next: partida => {
            this.formGroupPartida.patchValue({
              id: partida.id,
              data: partida.data,
              estadio: partida.estadio,
              mandanteId: partida.mandanteId,
              visitanteId: partida.visitanteId,
              golsMandante: partida.golsMandante,
              golsVisitante: partida.golsVisitante
            });
          }
        });
      }
      this.selecaoService.getAllSelecoes().subscribe({
        next: selecoes => {
          this.selecoes.set(selecoes);
        }
      });
  }

  save(){
    this.mensagemErro.set('');
    this.mensagemSucesso.set('');

    this.service.save(this.formGroupPartida.value).subscribe(
      {
        next: json => {
          this.partidas.update(partidas => [...partidas, json]);

          this.mensagemSucesso.set(
            'Partida cadastrada com sucesso!'
          );
          this.formGroupPartida.reset({
            golsMandante: 0,
            golsVisitante: 0
          });
        },
        error: (err) => {
          console.error(err);

          this.mensagemErro.set(
            'Não foi possível cadastrar a partida.'
          );
        }
      }
    );
  }

  update(){

    this.mensagemErro.set('');
    this.mensagemSucesso.set('');

    this.service.update(this.formGroupPartida.value).subscribe({
      next: () => {

        this.mensagemSucesso.set(
        'Partida atualizada com sucesso!'
      );

      setTimeout(() => {
        this.isEditing = false;
        this.formGroupPartida.reset();

        this.router.navigate(['/partidas']);

      }, 1000);
      },

      error: (err) => {
        console.error(err);

        this.mensagemErro.set(
          'Não foi possível atualizar a partida.'
        );
      }
    });
  }
}

