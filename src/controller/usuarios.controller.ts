/* eslint-disable prettier/prettier */
import { NestResponseBuilder } from './../core/http/nest-response-builder';
import { NestResponse } from './../core/http/nest-response';

import { UsuariosService } from './../service/usuarios.service';
import { Usuarios } from './../model/usuarios.model';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post()
  public criarUsuario(@Body() usuario: Usuarios): NestResponse {
    this.usuariosService.criar(usuario);

    return new NestResponseBuilder()
      .setStatus(HttpStatus.CREATED)
      .setHeaders({
        'Location': `/users/${usuario.nomeUsuario}`,
      })
      .setBody(usuario)
      .build();
  }

  @Get(':nome')
  public buscaPorNome(@Param('nome') nome: string): Usuarios {
    const usuarioEncontrado = this.usuariosService.buscaPorNome(nome);

    if (!usuarioEncontrado) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: `Usuário com nome ${nome} não encontrado`,
      });
    } else{
      return usuarioEncontrado;
    }
  }
}
