import { Component } from '@angular/core';
import { Selecao } from '../../models/selecao';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selecao-form',
  standalone: false,
  templateUrl: './selecao-form.html',
  styleUrl: './selecao-form.css',
})
export class SelecaoForm {

  selecoes: Selecao[] = [];
  formGroupSelecao: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupSelecao = this.formBuilder.group({
      name: [''],
      coach: [''],
      group: [''],
      fifaRanking: [0],
      numberOfTitles: [0]
    });
  }

  save() {
    this.selecoes.push(this.formGroupSelecao.value);
    this.formGroupSelecao.reset();
  }

}
