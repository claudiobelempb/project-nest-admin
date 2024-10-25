import * as bcrypt from 'bcrypt';
import { z, ZodRawShape } from 'zod';
import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation-pipe';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { UserCreateDTO } from '../dto/user-create.dto';

export const createUserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirm: z.string(),
  role_id: z.string().optional(),
});

type createUserSchema = z.infer<typeof createUserSchema>;

// @UseInterceptors(ClassSerializerInterceptor)
@Controller('/users')
export class UserCreateController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createUserSchema))
  // @UseGuards(AuthGuard)
  async handle(@Body() request: createUserSchema): Promise<UserCreateDTO> {
    const { first_name, last_name, email, password, password_confirm } =
      request;
    const hashed = await bcrypt.hash(password, 8);

    if (password !== password_confirm) {
      throw new BadRequestException('Password do not match!');
    }

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException('User with same e-mail already exists.');
    }

    return await this.prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        password: hashed,
        roleId: request.role_id,
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        active: true,
        roleId: true,
        createdAt: true,
      },
    });
  }
}
