import { UsuariosService } from './../service/usuarios.service';
/* eslint-disable prettier/prettier */
import { Usuarios } from 'src/model/usuarios.model';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsNomeDeUsuarioConstraint implements ValidatorConstraintInterface{
  
  constructor(private usuariosService: UsuariosService){}

  validate(nomeDeUsario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    return !!!this.usuariosService.buscaPorNome(nomeDeUsario); 
  }


}

export function IsNomeDeUsuario(validationOptions?: ValidationOptions) {
  return function (object: Usuarios, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNomeDeUsuarioConstraint,
    });
  };
}