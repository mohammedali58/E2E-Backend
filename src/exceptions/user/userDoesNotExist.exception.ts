import { NotFoundException } from "@nestjs/common";

export class UserDoesNotExistException extends NotFoundException{
  constructor(){
    super("User doesn't exist");
  }
}