import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envSchema } from './env';
import { AuthModule } from './modules/auth/auth.module';
import { AuthenticateController } from './modules/auth/controllers/authenticate.controller';
import { PrismaService } from './shared/prisma/prisma.service';
import { UserCreateController } from './modules/user/controllers/user.create.controller';
import { AuthRegisterController } from './modules/auth/controllers/auth-register-ontroller';
import { UserProfileControler } from './modules/user/controllers/user-profile.controller';
import { AuthLoginController } from './modules/auth/controllers/auth-login.controller';
import { AuthLogoutControler } from './modules/auth/controllers/auth-logout.controller';
import { UserFindAllControler } from './modules/user/controllers/user-findall.controller';
import { UserFindByIdControler } from './modules/user/controllers/user-findbyid..controller';



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
    UserFindAllControler,
    UserFindByIdControler,
    UserCreateController,
    AuthenticateController, 
    AuthRegisterController, 
    AuthLoginController,
    UserProfileControler,
    AuthLogoutControler,
  ],
  providers: [PrismaService],
})
export class AppModule {}