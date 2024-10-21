import { Module } from '@nestjs/common';

import { PrismaService } from './shared/prisma/prisma.service';
import { UserCreateController } from './modules/user/controllers/create-user.controller';
import { RegisterController } from './modules/auth/controllers/register.controller';
import { LoginController } from './modules/auth/controllers/login.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { AuthenticateController } from './modules/auth/controllers/authenticate.controller';
import { AuthService } from './modules/auth/auth.service';
import { UsersService } from './modules/user/controllers/users.service';

@Module({
  imports: [],
  controllers: [UserCreateController, RegisterController, LoginController, AuthenticateController],
  providers: [PrismaService, AuthModule, JwtModule, JwtService, AuthService, UsersService],
})
export class AppModule {}
