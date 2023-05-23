import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  url = "http://localhost:3000/aluno"

  constructor(private Http : HttpClient) { }

  getalunos() : Observable<Aluno[]>{

    return this.Http.get<Aluno[]>(this.url);
  }

  save(aluno : Aluno) : Observable<Aluno>{

    return this.Http.post<Aluno>(this.url, aluno);
  }
}
