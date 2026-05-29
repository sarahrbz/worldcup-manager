import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Selecao } from '../models/selecao';

@Injectable({
  providedIn: 'root',
})
export class SelecaoService {

  apiUrl = 'http://localhost:8080/selecoes';

  constructor(private http: HttpClient) { }

  getAllSelecoes() {
    return this.http.get<Selecao[]>(this.apiUrl);
  }

  save(selecao: Selecao) {
    return this.http.post<Selecao>(this.apiUrl, selecao);
  }

  delete(selecao: Selecao) {
    return this.http.delete<void>(`${this.apiUrl}/${selecao.id}`);
  }

  update(selecao: Selecao) {
    return this.http.put<Selecao>(`${this.apiUrl}/${selecao.id}`, selecao);
  }

  getById(id: number) {
  return this.http.get<Selecao>(`${this.apiUrl}/${id}`);
}
}
