/* eslint-disable prettier/prettier */
import { IsNomeDeUsuarioConstraint } from './../decorator/is-nome-de-usuario';
import { UsuariosService } from './../service/usuarios.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UsuariosController } from 'src/controller/usuarios.controller';

@Module({
    imports: [],
    controllers: [UsuariosController],
    providers: [UsuariosService, IsNomeDeUsuarioConstraint],
})
export class UsuariosModule {}
