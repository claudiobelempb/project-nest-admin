import { BadRequestException, Body, Controller, HttpCode, NotFoundException, Post, Res, UsePipes } from "@nestjs/common";
import { ZodValidationPipe } from "src/shared/pipes/zod-validation-pipe";
import { PrismaService } from "src/shared/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { z } from "zod";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

type loginSchemaType = z.infer<typeof loginSchema>;

@Controller('/login')
export class AuthLoginController{
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    @Post()
    @HttpCode(200)
    @UsePipes(new ZodValidationPipe(loginSchema))
    async handle(
        @Body() request: loginSchemaType,
        @Res({passthrough: true}) response: Response
    ){
        const {email, password} = request;
        const getUser = await this.prisma.user.findUnique({
            where: {email},
            select: {id: true, first_name: true, last_name: true, email: true, password: true, active: true,}
        });
        
        if(!getUser){
            throw new NotFoundException('User not found');
        }
        
        const comparePassword = await bcrypt.compare(password, getUser.password);
        if(!comparePassword){
            throw new BadRequestException('Invalid credentials');
        }

        const token = await this.jwtService.signAsync({
            id: getUser.id,
          });
        response.cookie('jwt', token, {httpOnly: true});

        return getUser;
    }
}