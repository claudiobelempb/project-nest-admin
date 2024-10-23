import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class RoleFindAllService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<Role[]> {
    return await this.prisma.role.findMany();
  }
}
