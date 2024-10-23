import { ConflictException, Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { date } from 'zod';

@Injectable()
export class RoleCreateService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: Role): Promise<Role> {
    const { name } = data;
    const roleWithSameName = await this.prisma.role.findFirst({
      where: { name },
    });

    if (roleWithSameName) {
      throw new ConflictException('Role with same name already exists.');
    }
    return await this.prisma.role.create({
      data,
    });
  }
}
