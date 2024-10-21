
import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CommonModule } from 'src/shared/common/common.module';
import { UserDeleteController } from './controllers/user-delete.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';



@Module({
  imports: [],
  controllers:[UserDeleteController],
  providers: [UsersService, CommonModule, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
