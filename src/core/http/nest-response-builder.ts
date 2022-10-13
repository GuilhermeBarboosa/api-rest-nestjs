/* eslint-disable prettier/prettier */
import { NestResponse } from './nest-response';

export class NestResponseBuilder {
  private resposta: NestResponse = {
    status: 200,
    body: {},
    headers: {},
  };

  public setStatus(status: number): NestResponseBuilder {
    this.resposta.status = status;
    return this;
  }

  public setHeaders(headers: any): NestResponseBuilder {
    this.resposta.headers = headers;
    return this;
  }

  public setBody(body: any): NestResponseBuilder {
    this.resposta.body = body;
    return this;
  }

  public build(): NestResponse {
    return new NestResponse(this.resposta);
  }
}
