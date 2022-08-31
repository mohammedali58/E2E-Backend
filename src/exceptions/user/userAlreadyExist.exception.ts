import { BadRequestException } from "@nestjs/common";

export class UserAlreadyPublishedException extends BadRequestException{
  constructor(){
    super('User is already existed');
  }
}