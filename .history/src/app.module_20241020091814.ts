import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envSchema } from './env';
import { AuthModule } from './modules/auth/auth.module';
import { AuthenticateController } from './modules/auth/controllers/authenticate.controller';
import { PrismaService } from './shared/prisma/prisma.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [ AuthenticateController],
  providers: [PrismaService],
})
export class AppModule {}