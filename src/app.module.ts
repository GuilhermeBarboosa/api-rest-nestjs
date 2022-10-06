import { UsuariosService } from './service/usuarios.service';
import { UsuariosController } from './controller/usuarios.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [UsuariosController, AppController],
  providers: [UsuariosService, AppService],
})
export class AppModule {}
