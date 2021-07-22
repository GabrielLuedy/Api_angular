import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos:any

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(){
 this.alunosService.listarAlunos().subscribe(alunos =>{ 
   console.log(alunos);
   
  this.alunos=alunos;
 },err =>{
   console.log('erro ao listar os alunos', err);
   
 })
  }
}
