import { Controller, Get, Req } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Controller('/profile')
export class UserProfileControler {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    @Get()
    async hamdle(@Req() request: Request){
        const cookie = request.cookies['jwt'];
        const data = await this.jwtService.verify(cookie);
        return this.prisma.user.findUnique({
            where:  {id: data.id},
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                active: true
            }
        });
    }
}