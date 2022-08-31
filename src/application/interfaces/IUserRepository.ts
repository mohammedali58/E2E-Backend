import { User } from "src/domain/user/user";
import IRepository from "./IRepository";

export abstract class IUserRepository extends IRepository<User>{
  abstract getUserById(userId: string): Promise<User>;
}