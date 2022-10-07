/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Usuarios } from 'src/model/usuarios.model';

@Injectable()
export class UsuariosService {
  private usuarios: Usuarios[] = [
    {
      nomeUsuario: 'admin',
      nome: 'João',
      email: 'joao@email.com',
      senha: '123456',
      telefone: '999999999'
    },
    {
      nomeUsuario: 'maria',
      nome: 'Maria',
      email: 'maria@email.com',
      senha: '123456',
      telefone: '999999999'
    }
  ];

  public criar(usuario: Usuarios){
   this.usuarios.push(usuario);
   return usuario;
  }

  public buscaPorNome(nome: string): Usuarios{
    return this.usuarios.find(usuario => usuario.nome === nome);
  }
}
