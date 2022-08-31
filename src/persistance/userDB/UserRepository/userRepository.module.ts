import { Module } from "@nestjs/common";
import { IUserRepository } from "../../../application/interfaces/IUserRepository";
import { UserRepository } from "./userRepository.service";

@Module({
  providers: [{ provide: IUserRepository, useClass: UserRepository }],
  exports: [IUserRepository],
})

export class UserRepositoryModule {}