import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../interfaces/IUserRepository';
import { IDeleteUser } from './IDeleteUser';

@Injectable()
export class DeleteUser implements IDeleteUser {
  constructor(private iUserRepo: IUserRepository) {}

  async execute(userId: number) {
    return this.iUserRepo.delete(userId);
  }
}
