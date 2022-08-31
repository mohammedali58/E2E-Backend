import {Controller,Delete,Get,Param,Post,Req} from '@nestjs/common';
import { Request } from 'express';
import { GetAllUsers } from '../../application/user/getAllUsers/getAllUsers.service';
import { AddUser } from '../../application/user/addUserEntry/addUser.service';
import { DeleteUser } from '../../application/user/deleteUserEntry/deleteUser.service';
import { GetUser } from '../../application/user/getUser/getUser.service';
import { UpdateUser } from '../../application/user/updateUser/updateUser.service';
// import { UserAlreadyPublishedException } from '../../exceptions/user/UserAlreadyExist.exception';
// import { UserDoesNotExistException } from '../../exceptions/user/userDoesNotExist.exception';

@Controller('api/user/')
export default class UserController {
  constructor(
    private addUser: AddUser,
    private getUser: GetUser,
    private updateUser: UpdateUser,
    private deleteUser: DeleteUser,
    private getAllUsers: GetAllUsers,
  ) {}
  @Get('all')
  async getAll() {
    return await this.getAllUsers.execute();
  }
  @Get(':id')
  async getUserById(@Param('id') userId: string) {
    const user = this.getUser.execute(userId);
    if (!user) {
      return "user does not exist"
     // throw new UserDoesNotExistException();
    }
    return user;
  }

  @Post('addUser')
  async addOrUpdateUserRecord(@Req() req: Request) {
    try {
      if (!req.body.id) {
        return await this.addUser.execute(req.body);
      } else {
        return await this.updateUser.execute(req.body);
      }
    } catch (error) {
      throw new Error('');
      //throw new UserAlreadyPublishedException()
    }
  }

  @Delete('deleteUser/:userId')
  async deleteUserRecord(@Param('userId') userId: number) {
    try {
      const deletedId = await this.deleteUser.execute(userId);
      if (deletedId === 0) {
        return "User Doesn't exist ";

        //throw new UserDoesNotExistException();
      }

      // return success message
      return 'Successfully deleted';
    } catch (error) {
      throw new Error('');
    }
  }
}
