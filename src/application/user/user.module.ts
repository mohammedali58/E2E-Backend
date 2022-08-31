import { Module } from '@nestjs/common';
import { UserRepositoryModule } from '../../persistance/userDB/UserRepository/userRepository.module';
import { AddUser } from './addUserEntry/addUser.service';
import { DeleteUser } from './deleteUserEntry/deleteUser.service';
import { GetAllUsers } from './getAllUsers/getAllUsers.service';
import { GetUser } from './getUser/getUser.service';
import { UpdateUser } from './updateUser/updateUser.service';

@Module({
  imports: [UserRepositoryModule],
  exports: [UpdateUser, GetUser, AddUser, DeleteUser,GetAllUsers],
  providers: [UpdateUser, GetUser, AddUser, DeleteUser,GetAllUsers],
})
export class UserServiceModule {}
