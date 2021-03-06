import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: UsuarioModel = new UsuarioModel
  confirmarSenha: string
  tipoUsuario: string
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit()  {
    window.scroll(0,0)
  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }
  
  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }
  
  cadastrar(){

   this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      alert("As senhas estão diferentes")
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: UsuarioModel) =>{
        this.user= resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado!!')
      })
    }

  }

}
