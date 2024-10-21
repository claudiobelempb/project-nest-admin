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
  NotFoundException,
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
import { Prisma, User } from '@prisma/client';

export const updateUserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
});

type updateUserSchema = z.infer<typeof updateUserSchema>;

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserUpdateController {
  constructor(private prisma: PrismaService) {}

  @Put(':id')
  @UsePipes(new ZodValidationPipe(updateUserSchema))
  @UseGuards(AuthGuard)
  async handle(
    @Param('id') id: string,
    @Body() request: updateUserSchema,
  ): Promise<updateUserSchema> {

    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
      }
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // Verificar se o novo e-mail é igual ao atual
    if (request.email && request.email === user.email) {
      return user; // Retorna o usuário sem alterações
    }

    // Verificar se o novo e-mail já existe
    if (request.email) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: request.email },
      });

      if (existingUser) {
        throw new ConflictException('User with same e-mail already exists.');
      }
    }

    return await this.prisma.user.update({
      where: { id },
      data: {...request},
      select: {
        first_name: true,
        last_name: true,
        email: true,
      },
    });
  }
}
