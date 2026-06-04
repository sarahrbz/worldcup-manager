import { Component, OnInit, signal } from '@angular/core';
import { Jogador } from '../../models/jogador';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JogadorService } from '../../services/jogador-service';
import { SelecaoService } from '../../services/selecao-service';
import { Selecao } from '../../models/selecao';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jogador-form',
  standalone: false,
  templateUrl: './jogador-form.html',
  styleUrl: './jogador-form.css',
})
export class JogadorForm implements OnInit {

  jogadores = signal<Jogador[]>([]);
  selecoes = signal<Selecao[]>([]);

  isEditing: boolean = false;

  formGroupJogador: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: JogadorService, private selecaoService: SelecaoService, private route: ActivatedRoute, private router: Router) {
    this.formGroupJogador = this.formBuilder.group({
      id: [null],
      name: [''],
      position: [''],
      age: [null],
      number: [0],
      club: [''],
      selecaoId: [null]
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.service.getById(Number(id)).subscribe({
        next: jogador => {
          this.formGroupJogador.patchValue({
            id: jogador.id,
            name: jogador.name,
            position: jogador.position,
            age: jogador.age,
            number: jogador.number,
            club: jogador.club,
            selecaoId: jogador.selecaoId
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
      this.service.save(this.formGroupJogador.value).subscribe(
        {
          next: json => {
            this.jogadores.update(jogadores => [...jogadores, json]);
            this.formGroupJogador.reset();
          }
      });
    }

    update(){
      this.service.update(this.formGroupJogador.value).subscribe({
        next: () => {
          this.isEditing = false;
          this.formGroupJogador.reset();

          this.router.navigate(['/jogadores']); // Após atualizar o jogador, redirecione para a lista de jogadores

        }
    });
  }
}
