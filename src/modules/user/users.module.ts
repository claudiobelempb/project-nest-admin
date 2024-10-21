
import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CommonModule } from 'src/shared/common/common.module';
import { UserDeleteController } from './controllers/user-delete.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserCreateController } from './controllers/user-create.controller';
import { UserFindAllControler } from './controllers/user-findall.controller';
import { UserFindByIdControler } from './controllers/user-findbyid..controller';
import { UserProfileControler } from './controllers/user-profile.controller';
import { UserUpdateController } from './controllers/user-update.controller';



@Module({
  imports: [],
  controllers:[
    UserFindAllControler,
    UserFindByIdControler,
    UserCreateController,
    UserProfileControler,
    UserUpdateController,
    UserDeleteController
  ],
  providers: [UsersService, CommonModule, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
