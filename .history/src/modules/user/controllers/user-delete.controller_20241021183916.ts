import {
  ClassSerializerInterceptor,
  Controller,
  Delete,
  NotFoundException,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { AuthGuard } from 'src/modules/auth/auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserDeleteController {
  constructor(private prisma: PrismaService) {}

  @Delete(':id')
  @UseGuards(AuthGuard)
  async handle(
    @Param('id') id: string
  ): Promise<void> {

    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
      }
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.prisma.user.delete({
      where: { id }
    });
  }
}
