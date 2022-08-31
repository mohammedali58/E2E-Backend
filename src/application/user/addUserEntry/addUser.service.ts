import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../interfaces/IUserRepository';
import { User } from 'src/domain/user/user';
import { IAddUser } from './IAddUser';

@Injectable()
export class AddUser implements IAddUser {
  constructor(private iUserRepo: IUserRepository) {}

  async execute(user: User) {
    const userRecord = await this.iUserRepo.getUserById(user.id);
    if (userRecord) {
      return 'user is already existed';
    } else {
      return this.iUserRepo.create(user);
    }
  }
}
