import { User } from "src/domain/user/user";

export interface IUpdateUser{
  execute(user: User);
}