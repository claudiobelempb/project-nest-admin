import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envSchema } from './env';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './shared/prisma/prisma.service';
import { UsersModule } from './modules/user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
