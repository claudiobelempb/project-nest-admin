import { ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors} from "@nestjs/common";

import { AuthGuard } from "src/modules/auth/auth.guard";
import { PrismaService } from "src/shared/prisma/prisma.service";
import {User} from '@prisma/client'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('/users')
export class UserFindAllControler {
    constructor(
        private prisma: PrismaService
    ) {}
   
    @UseGuards(AuthGuard)
    @Get()
    async hamdle(): Promise<User[]>{
        return this.prisma.user.findMany();
    }
}