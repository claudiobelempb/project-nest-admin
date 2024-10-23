import { Role } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class RoleCreateService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    execute(data: Role): Promise<Role>;
}
