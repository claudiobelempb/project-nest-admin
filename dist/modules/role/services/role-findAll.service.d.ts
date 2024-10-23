import { Role } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class RoleFindAllService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    execute(): Promise<Role[]>;
}
