import { Injectable } from '@angular/core';
import { Jogador } from '../models/jogador';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JogadorService {
  apiUrl = 'http://localhost:8080/jogadores';

  constructor(private http: HttpClient) {}

  getAllJogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.apiUrl);
  }

  save (jogador: Jogador): Observable<Jogador> {
    return this.http.post<Jogador>(this.apiUrl, jogador);
  }

  delete(jogador: Jogador): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${jogador.id}`);
  }

  update(jogador: Jogador): Observable<Jogador> {
    return this.http.put<Jogador>(`${this.apiUrl}/${jogador.id}`, jogador);
  }

  getById(id: number): Observable<Jogador> {
    return this.http.get<Jogador>(`${this.apiUrl}/${id}`);
  }
}
