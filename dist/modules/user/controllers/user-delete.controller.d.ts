import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class UserDeleteController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(id: string): Promise<void>;
}
