import * as bcrypt from 'bcrypt';
import { z } from 'zod';
import { BadRequestException, Body, ClassSerializerInterceptor, ConflictException, Controller, Get, HttpCode, Param, Post, Put, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation-pipe';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { UUID } from 'crypto';

export const updateUserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirm: z.string(),
});

type updateUserSchema = z.infer<typeof updateUserSchema>;

@UseInterceptors(ClassSerializerInterceptor)
@Controller('/users')
export class UserUpdateController {

  constructor(private prisma: PrismaService) {}

  @Put(':id')
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(updateUserSchema))
  @UseGuards(AuthGuard)
  async handle(
    @Body() request: updateUserSchema,
    @Param('id') id: UUID
  ): Promise<updateUserSchema> {
    const {first_name, last_name, email, password, password_confirm} = request;
        const hashed = await bcrypt.hash(password, 8);

        if(password !== password_confirm){
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
    return await this.prisma.user.update({
      where: {
        id
      },
      data: {
          first_name,
          last_name,
          email,
          password: hashed
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        active: true,
        createdAt: true,
      }
  });
  }
  
}


