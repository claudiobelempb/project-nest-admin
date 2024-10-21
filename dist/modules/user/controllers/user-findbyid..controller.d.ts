import { PrismaService } from "src/shared/prisma/prisma.service";
import { User } from '@prisma/client';
import { UUID } from "crypto";
export declare class UserFindByIdControler {
    private prisma;
    constructor(prisma: PrismaService);
    hamdle(id: UUID): Promise<User>;
}
