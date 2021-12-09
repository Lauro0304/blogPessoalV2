import { TemaModel } from "./TemaModel"
import { UsuarioModel } from "./UsuarioModel"

export class PostagemModel{
    public data: Date
    public id: number
    public texto: string
    public titulo: string
    public usuario: UsuarioModel
    public tema: TemaModel
    

}