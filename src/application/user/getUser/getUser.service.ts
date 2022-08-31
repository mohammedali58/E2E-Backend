import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../interfaces/IUserRepository';
import { IGetUser } from './IGetUser';

@Injectable()
export class GetUser implements IGetUser {
  constructor(private iUserRepo: IUserRepository) {}

  async execute(userID: string) {
    return this.iUserRepo.getUserById(userID);
  }
}
