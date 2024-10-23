import { PrismaService } from 'src/shared/prisma/prisma.service';
import { User } from '@prisma/client';
type UserOmit = Omit<User, 'id' | 'password' | 'updatedAt'>;
interface PaginatedResponse<T> {
    content: T[];
    page: number;
    last_page: number;
    total: number;
}
export declare class UserFindAllControler {
    private prisma;
    constructor(prisma: PrismaService);
    hamdle(page?: number, pageSize?: number): Promise<PaginatedResponse<UserOmit>>;
}
export {};
