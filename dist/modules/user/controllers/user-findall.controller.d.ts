import { PrismaService } from "src/shared/prisma/prisma.service";
import { User } from '@prisma/client';
export declare class UserFindAllControler {
    private prisma;
    constructor(prisma: PrismaService);
    hamdle(): Promise<User[]>;
}
