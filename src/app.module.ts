import { UsuariosModule } from './module/usuarios.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
