import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaModel } from '../model/TemaModel';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  tema: TemaModel = new TemaModel

  listaTema: TemaModel[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Seção expirada, faça o login novamente!')
      this.router.navigate(['/login'])
    }

    this.findAllTemas()
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: TemaModel)=>{
      this.tema=resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new TemaModel()
    })
  }
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: TemaModel[])=>{
      this.listaTema=resp
    })
  }

}
