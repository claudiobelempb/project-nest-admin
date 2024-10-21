import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CommonModule } from 'src/shared/common/common.module';


@Module({
  imports: [
    PassportModule,
    CommonModule
  ],
})
export class AuthModule {}