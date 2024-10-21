import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envSchema } from './env';
import { AuthModule } from './modules/auth/auth.module';
import { AuthenticateController } from './modules/auth/controllers/authenticate.controller';
import { PrismaService } from './shared/prisma/prisma.service';
import { AuthRegisterController } from './modules/auth/controllers/auth-register-ontroller';
import { AuthLoginController } from './modules/auth/controllers/auth-login.controller';
import { AuthLogoutControler } from './modules/auth/controllers/auth-logout.controller';
import { UsersModule } from './modules/user/users.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [
    AuthenticateController, 
    AuthRegisterController, 
    AuthLoginController,
    AuthLogoutControler,
  ],
  providers: [PrismaService],
})
export class AppModule {}