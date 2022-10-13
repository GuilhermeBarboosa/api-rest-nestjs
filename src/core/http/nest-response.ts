/* eslint-disable prettier/prettier */
export class NestResponse{
    public status: number;
    public body: any;
    public headers: any;

    constructor(resposta: NestResponse) {
        // this.status = resposta.status;
        // this.body = resposta.body;
        // this.headers = resposta.headers; 
        Object.assign(this, resposta);
    }
}