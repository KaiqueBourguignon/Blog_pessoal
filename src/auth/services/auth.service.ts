import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";


@Injectable()
export class AuthService{
    constructor (
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ){}

    async validadeUser(username: string , password: string): Promise<any>{

        const buscaUsuario = await this.usuarioService.findByUsuario(username)

        if (!buscaUsuario)
        throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
    
    const match = await this.bcrypt.comparaSenhas(buscaUsuario.senha , password)
    
    if (buscaUsuario && match) {
        const { senha , ...result} = buscaUsuario;
        return result ;

    }
    return null;
}

    async Login(UsuarioLogin: any){

        const payload = {username: UsuarioLogin.usuario , sub: "blogpessoal"};
        return{
            usuario: UsuarioLogin.usuario,
            token: `Bearer ${this.jwtService.sign(payload)}`,
        };
    
    }
  
  }