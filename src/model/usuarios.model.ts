/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { IsNomeDeUsuario } from 'src/decorator/is-nome-de-usuario';

export class Usuarios {
  id?: number;

  @Expose({
    name: 'username',
  })
  @IsNomeDeUsuario({
    message: 'Nome de usuário inválido',
  })
  @IsNotEmpty()
  nomeUsuario: string;

  @Expose({
    name: 'name',
  })
  @IsNotEmpty({
    message: 'O nome é obrigatório',
  })
  nome: string;

  @IsNotEmpty({
    message: 'O email é obrigatório',
  })
  @IsEmail()
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'A senha é obrigatória',
  })
  senha: string;


  @Expose({
    name: 'cellphone',
  })
  @IsPhoneNumber('BR')
  telefone: string;
}
