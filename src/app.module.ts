import { UsuariosModule } from './module/usuarios.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroExcecaoHttp } from './exception/filtro-de-exception-hhtp.filter';
import { TransformaRespostaInterceptor } from './core/http/trasnforma-resposta.interceptor';

@Module({
  imports: [UsuariosModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: FiltroExcecaoHttp,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor,
    },
  ],
})
export class AppModule {}
