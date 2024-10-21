import * as bcrypt from 'bcrypt';
import { BadRequestException, Body, ConflictException, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';
import {z} from 'zod';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation-pipe';

export const registerSchema = z.object({
    last_name: z.string(),
    first_name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirm: z.string(),
});

type registerSchema = z.infer<typeof registerSchema>;

@Controller('/register')
export class AuthRegisterController {

    constructor(
        private prisma: PrismaService
    ){}

    @Post()
    @HttpCode(201)
    @UsePipes(new ZodValidationPipe(registerSchema))
    async handle(@Body() request: registerSchema): Promise<registerSchema>{
        const {first_name, last_name, email, password, password_confirm} = request;
        const hashed = await bcrypt.hash(password, 8);

        if(password !== password_confirm){
            throw new BadRequestException('Password do not match!');
        }

        const userWithSameEmail = await this.prisma.user.findUnique({
            where: {
                email,
            }
        });
      
        if (userWithSameEmail) {
            throw new ConflictException('User with same e-mail already exists.');
        }

        return await this.prisma.user.create({
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
            }
        });
    }
}
