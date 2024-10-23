import { Role } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class RoleFindByIdService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    execute(id: string): Promise<Role>;
}
