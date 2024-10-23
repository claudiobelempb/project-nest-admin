import {
  ConflictException,
  Injectable,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { z } from 'zod';

export const updateRoleSchema = z.object({
  name: z.string(),
});

export type updateRoleSchema = z.infer<typeof updateRoleSchema>;

@Injectable()
export class RoleUpdateService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(
    id: string,
    request: updateRoleSchema,
  ): Promise<updateRoleSchema> {
    try {
      const entity = await this.prisma.role.findUnique({
        where: {
          id,
        },
        select: {
          name: true,
        },
      });

      if (!entity) {
        throw new NotFoundException('Entiry not found...');
      }

      // Verificar se o novo e-mail é igual ao atual
      if (request.name && request.name === entity.name) {
        return entity; // Retorna o usuário sem alterações
      }

      // Verificar se o novo e-mail já existe
      if (request.name) {
        const existingUser = await this.prisma.user.findUnique({
          where: { email: request.name },
        });

        if (existingUser) {
          throw new ConflictException('Role with same name already exists.');
        }
      }

      return await this.prisma.role.update({
        where: { id },
        data: { ...request },
        select: {
          name: true,
        },
      });
    } catch (error) {
      throw new NotFoundException('Entity not Found...');
    }
  }
}
