import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../interfaces/IUserRepository';
import { User } from 'src/domain/user/user';
import {  IGetAll } from './IAddUser';

@Injectable()
export class GetAllUsers implements IGetAll {
  constructor(private iUserRepo: IUserRepository) {}

  async execute() {
    return this.iUserRepo.getAll();
  }
}
