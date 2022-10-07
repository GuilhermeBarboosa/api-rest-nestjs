/* eslint-disable prettier/prettier */
import { UsuariosService } from './../service/usuarios.service';
import { Usuarios } from './../model/usuarios.model';
/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsuariosController {

    constructor(private usuariosService: UsuariosService){}

    @Post()
    public criarUsusario(@Body() usuario:Usuarios){
        return this.usuariosService.criar(usuario);
    }

    @Get(':nome')
    public buscaPorNome(@Param ('nome') nome: string): Usuarios{
        return this.usuariosService.buscaPorNome(nome);
    }

}
