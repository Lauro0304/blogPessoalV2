import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLoginModel } from '../model/UsuarioLoginModel';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar (userLogin: UsuarioLoginModel): Observable<UsuarioLoginModel>{
    return this.http.post<UsuarioLoginModel>('http://localhost:8080/usuarios/logar', userLogin)

  }

  cadastrar(user:UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('http://localhost:8080/usuarios/cadastrar', user)


  }
}
