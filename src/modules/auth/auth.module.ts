import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CommonModule } from 'src/shared/common/common.module';
import { AuthLoginController } from './controllers/auth-login.controller';
import { AuthLogoutControler } from './controllers/auth-logout.controller';
import { AuthRegisterController } from './controllers/auth-register-ontroller';
import { AuthenticateController } from './controllers/authenticate.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';


@Module({
  imports: [
    PassportModule,
    CommonModule
  ],
  controllers: [
    AuthenticateController, 
    AuthRegisterController, 
    AuthLoginController,
    AuthLogoutControler,
  ],
  providers: [PrismaService],
})
export class AuthModule {}