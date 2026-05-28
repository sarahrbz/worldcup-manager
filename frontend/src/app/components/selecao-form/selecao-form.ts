import { Component, OnInit, signal } from '@angular/core';
import { Selecao } from '../../models/selecao';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelecaoService } from '../../services/selecao-service';

@Component({
  selector: 'app-selecao-form',
  standalone: false,
  templateUrl: './selecao-form.html',
  styleUrl: './selecao-form.css',
})
export class SelecaoForm {

  selecoes = signal<Selecao[]>([]);

  formGroupSelecao: FormGroup;

  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: SelecaoService) {
    this.formGroupSelecao = this.formBuilder.group({
      name: [''],
      coach: [''],
      group: [''],
      fifaRanking: [0],
      numberOfTitles: [0]
    });
  }


  save() {
    this.service.save(this.formGroupSelecao.value).subscribe({
      next: json => {

        this.selecoes.update(selecoes => [...selecoes, json]);
        this.formGroupSelecao.reset();
      }

    });

  }

  update() {
    this.service.update(this.formGroupSelecao.value).subscribe({
      next: json => {
        this.selecoes.update(selecoes => selecoes.map(s => s.id === json.id ? json : s));
        this.isEditing = false;
        this.formGroupSelecao.reset();
      }
    });
  }

}
