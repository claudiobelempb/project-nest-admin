import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class RoleFindByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(@Param('id') id: string): Promise<Role> {
    try {
      const entity = await this.prisma.role.findUnique({
        where: {
          id,
        },
      });

      if (!entity) {
        throw new NotFoundException('Entity not Founf...');
      }
      return this.prisma.role.findUnique({ where: { id } });
    } catch (error) {
      throw new NotFoundException('Entity not Founf...');
    }
  }
}
