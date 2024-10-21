import { ClassSerializerInterceptor, Controller, Post,  Res, UseInterceptors} from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { Response } from "express";

import { PrismaService } from "src/shared/prisma/prisma.service";


@Controller('/logout')
export class UserProfileControler {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    async hamdle(
        @Res() response: Response
    ){
       response.clearCookie['jwt'];
       return {
        message: 'Success...',
       }
    };
}