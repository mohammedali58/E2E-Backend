import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../../application/interfaces/IUserRepository';
import { User } from '../../../domain/user/user';
import { UserModel } from '../../../persistance/models/user/userModel';

@Injectable()
export class UserRepository extends IUserRepository {
  async update(user: User): Promise<User> {
    try {
      await UserModel.update(user, { where: { id: user.id } });
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getUserById(userId: string): Promise<User> {
    try {
      return await UserModel.findOne({
        where: { id: userId },
      });
    } catch (err) {
      throw new Error(err);
    }
  }
  async create(item: User): Promise<User> {
    try {
      return await UserModel.create(item, { validate: true });
    } catch (err) {
      throw new Error(err);
    }
  }
  async getAll(): Promise<User[]> {
    try {
      return await UserModel.findAll();
    } catch (err) {
      throw new Error(err);
    }
  }
  async delete(userId: number): Promise<number> {
    try {
      return await UserModel.destroy({ where: { id: userId } });
    } catch (err) {
      throw new Error(err);
    }
  }
}
