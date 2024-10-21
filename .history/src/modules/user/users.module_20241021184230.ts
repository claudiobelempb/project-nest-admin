
import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CommonModule } from 'src/shared/common/common.module';
import { UserDeleteController } from './controllers/user-delete.controller';



@Module({
  controllers:[UserDeleteController],
  providers: [UsersService, CommonModule],
  exports: [UsersService],
})
export class UsersModule {}
