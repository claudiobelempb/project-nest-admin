import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class RoleDeleteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    execute(id: string): Promise<void>;
}
