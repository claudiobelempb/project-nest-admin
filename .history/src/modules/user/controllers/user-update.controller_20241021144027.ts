import * as bcrypt from 'bcrypt';
import { z } from 'zod';
import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation-pipe';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { UUID } from 'crypto';
import { Request } from 'express';
import { Prisma, User } from '@prisma/client';

export const updateUserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
});

type updateUserSchema = z.infer<typeof updateUserSchema>;

// @UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserUpdateController {
  constructor(private prisma: PrismaService) {}

  @Put(':id')
  // @UsePipes(new ZodValidationPipe(updateUserSchema))
  // @UseGuards(AuthGuard)
  async handle(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { data, where } = params;
    return await this.prisma.user.update({where, data});
  }
}
