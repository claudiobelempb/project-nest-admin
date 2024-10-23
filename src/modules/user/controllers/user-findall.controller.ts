import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { AuthGuard } from 'src/modules/auth/auth.guard';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { User } from '@prisma/client';

type UserOmit = Omit<User, 'id' | 'password' | 'updatedAt'>;
interface PaginatedResponse<T> {
  content: T[];
  page: number;
  last_page: number;
  total: number;
}
@Controller('/users')
// @UseInterceptors(ClassSerializerInterceptor)
export class UserFindAllControler {
  constructor(private prisma: PrismaService) {}

  // @UseGuards(AuthGuard)
  @Get()
  async hamdle(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<PaginatedResponse<UserOmit>> {
    const take = +pageSize;
    const skip = (+page - 1) * pageSize;

    const [result, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        skip,
        take,
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          active: true,
          createdAt: true,
        }
      }),
      this.prisma.user.count(),
    ]);

    return {
      content: result,
      page,
      last_page: Math.ceil(total / take),
      total
    };
  }
}
