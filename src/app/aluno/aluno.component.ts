import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

     aluno : Aluno [] = [];
     grupoAluno : FormGroup;

     constructor (private alunoService : AlunoService,
                  private formBuilder : FormBuilder
      ){
          this.grupoAluno = formBuilder.group({
            id : [''],
            name : [''],
            email : [''],
            gender : [''],
            rg : [''],
            cpf : ['']
          });
      }

     ngOnInit(): void {
      this.loadAluno
    }

    loadAluno(){
       this.alunoService.getalunos().subscribe({
        next: data => this.aluno = data,
        error: msg => console.log ("erro ao chamar o endpoint" + msg)
       })
    }

    save(){
      this.alunoService.save(this.grupoAluno.value).subscribe(
        {
                next : data => {
                    this.aluno.push(data);
                    this.grupoAluno.reset();
                }
        }
    )
    }

}
