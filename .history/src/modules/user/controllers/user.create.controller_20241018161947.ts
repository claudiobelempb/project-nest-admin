import * as bcrypt from 'bcrypt';
import { z } from 'zod';
import { BadRequestException, Body, ConflictException, Controller, Get, HttpCode, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation-pipe';
import { PrismaService } from 'src/shared/prisma/prisma.service';

export const createUserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirm: z.string(),
});

type createUserSchema = z.infer<typeof createUserSchema>;

@Controller('/users')
export class UserCreateController {

  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async handle(
    @Body() request: createUserSchema
  ) {
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
    await this.prisma.user.create({
      data: {
          first_name,
          last_name,
          email,
          password: hashed
      }
  });
  }
  
}


