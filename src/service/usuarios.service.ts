/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Usuarios } from 'src/model/usuarios.model';

@Injectable()
export class UsuariosService {
  private usuarios = [];

  public criar(usuario: Usuarios){
   this.usuarios.push(usuario);
   return usuario;
  }
}
