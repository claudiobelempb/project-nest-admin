
import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CommonModule } from 'src/shared/common/common.module';



@Module({
  providers: [UsersService, CommonModule],
  exports: [UsersService],
})
export class UsersModule {}
