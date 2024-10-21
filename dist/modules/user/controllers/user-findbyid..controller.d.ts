import { PrismaService } from "src/shared/prisma/prisma.service";
import { User } from '@prisma/client';
export declare class UserFindByIdControler {
    private prisma;
    constructor(prisma: PrismaService);
    hamdle(id: string): Promise<User>;
}
