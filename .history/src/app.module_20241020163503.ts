import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envSchema } from './env';
import { AuthModule } from './modules/auth/auth.module';
import { AuthenticateController } from './modules/auth/controllers/authenticate.controller';
import { PrismaService } from './shared/prisma/prisma.service';
import { UserCreateController } from './modules/user/controllers/UserCreateController';
import { RegisterController } from './modules/auth/controllers/RegisterController';
import { LoginController } from './modules/auth/controllers/login.controller';
import { UserProfileControler } from './modules/user/controllers/user-profile.controller';
import { UserLogoutControler } from './modules/user/controllers/user-logout.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    UserCreateController, 
    AuthenticateController, 
    RegisterController, 
    LoginController,
    UserProfileControler,
    UserLogoutControler
  ],
  providers: [PrismaService],
})
export class AppModule {}