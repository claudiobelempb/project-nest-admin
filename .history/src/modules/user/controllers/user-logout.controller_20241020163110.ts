import { ClassSerializerInterceptor, Controller, Get, Req, Res, UseInterceptors, UsePipes } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { Request, Response } from "express";
import { AuthInterceptorPipe } from "src/shared/pipes/auth-interceptor-pipe";
import { PrismaService } from "src/shared/prisma/prisma.service";


@Controller('/logout')
export class UserProfileControler {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async hamdle(
        @Res() response: Response
    ){
       response.clearCookie['jwt'];
       return {
        message: 'Success...',
       }
    }
}