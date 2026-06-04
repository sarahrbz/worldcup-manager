import { Component, signal } from '@angular/core';
import { Jogador } from '../../models/jogador';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jogador-form',
  standalone: false,
  templateUrl: './jogador-form.html',
  styleUrl: './jogador-form.css',
})
export class JogadorForm {

  jogadores = signal<Jogador[]>([]);

  formGroupJogador: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupJogador = this.formBuilder.group({
      id: [null],
      name: [''],
      position: [''],
      age: [0],
      number: [0],
      club: [''],
      selecaoId: [null]
    });
  }

}
