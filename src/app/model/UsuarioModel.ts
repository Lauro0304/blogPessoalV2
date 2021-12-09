import { PostagemModel } from "./PostagemModel"

export class UsuarioModel{
    public foto: string
    public id: number
    public nome: string
    public senha: string
    public usuarioModel: string
    public tipo: string 
    public postagem: PostagemModel[]
}