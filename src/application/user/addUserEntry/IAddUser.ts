import { User } from 'src/domain/user/user';

export interface IAddUser {
  execute(user: User);
}
