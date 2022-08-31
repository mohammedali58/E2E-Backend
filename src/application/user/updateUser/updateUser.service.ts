import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../interfaces/IUserRepository';
import { User } from 'src/domain/user/user';
import { IUpdateUser } from './IUpdateUser';

@Injectable()
export class UpdateUser implements IUpdateUser {
  constructor(private iUserRepo: IUserRepository) {}

  async execute(user: User) {
    return  this.iUserRepo.update(user);
  }
}
