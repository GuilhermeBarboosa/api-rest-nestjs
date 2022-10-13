import { NestResponse } from './nest-response';
/* eslint-disable prettier/prettier */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class TransformaRespostaInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((response: NestResponse) => {
        if (response instanceof NestResponse) {
          const contexto = context.switchToHttp();
          const resposta = contexto.getResponse();
          const { status, body, headers } = response;
          const nomesCabecalho = Object.getOwnPropertyNames(headers);

          nomesCabecalho.forEach((nome) => {
            const valorCabecalho = headers[nome];
            this.httpAdapter.setHeader(resposta, nome, valorCabecalho);
          });

          this.httpAdapter.status(resposta, status);

          return body;
        }

        return response;
      }),
    );
  }
}
