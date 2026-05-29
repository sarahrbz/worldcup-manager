import { Component, OnInit, signal } from '@angular/core';
import { Selecao } from '../../models/selecao';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelecaoService } from '../../services/selecao-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selecao-form',
  standalone: false,
  templateUrl: './selecao-form.html',
  styleUrl: './selecao-form.css',
})
export class SelecaoForm implements OnInit {

  selecoes = signal<Selecao[]>([]);

  formGroupSelecao: FormGroup;

  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: SelecaoService, private route: ActivatedRoute, private router: Router) { // Activated Route para pegar o ID da seleção a ser editada, ele é o serviço responsável por acessar os parâmetros da rota atual
    this.formGroupSelecao = this.formBuilder.group({
      id: [null],
      name: [''],
      coach: [''],
      group: [''],
      fifaRanking: [0],
      numberOfTitles: [0]
    });
  }

  ngOnInit(): void { // pegue o ID da seleção a ser editada a partir dos parâmetros da rota, usando o ActivatedRoute, e se existir um ID, busque os dados da seleção e preencha o formulário para edição
    const id = this.route.snapshot.paramMap.get('id'); // Pega o ID da seleção a ser editada a partir dos parâmetros da rota, usando o ActivatedRoute

  if(id){

    this.isEditing = true;

    this.service.getById(Number(id)).subscribe({
      next: selecao => {

        this.formGroupSelecao.patchValue({
          id: selecao.id,
          name: selecao.name,
          coach: selecao.coach,
          group: selecao.group,
          fifaRanking: selecao.fifaRanking,
          numberOfTitles: selecao.numberOfTitles
        });

      }
    });

  }
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
      next: () => {
        this.isEditing = false;
        this.formGroupSelecao.reset();

        this.router.navigate(['/selecoes']);
      }
    });
  }

}
