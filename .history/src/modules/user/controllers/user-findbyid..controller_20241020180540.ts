import { ClassSerializerInterceptor, Controller, Get, Param, UseGuards, UseInterceptors} from "@nestjs/common";

import { AuthGuard } from "src/modules/auth/auth.guard";
import { PrismaService } from "src/shared/prisma/prisma.service";
import {User} from '@prisma/client'
import { UUID } from "crypto";


@Controller('/users')
export class UserFindByIdControler {
    constructor(
        private prisma: PrismaService
    ) {}
   

    @Get(':id')
    async hamdle(@Param('id') id: UUID): Promise<User>{
        return this.prisma.user.findFirst({where: { id}});
    }
}