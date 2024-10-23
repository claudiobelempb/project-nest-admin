import { Delete, Injectable, NotFoundException, Param } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class RoleDeleteService {
  constructor(private readonly prisma: PrismaService) {}

  @Delete(':id')
  async execute(@Param('id') id: string): Promise<void> {
    const entity = await this.prisma.role.findUnique({
      where: {
        id,
      },
    });

    if (!entity) {
      throw new NotFoundException('Entity not Founf...');
    }

    await this.prisma.role.delete({
      where: { id },
    });
  }
}
