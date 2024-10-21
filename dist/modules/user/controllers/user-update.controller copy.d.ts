import { z } from 'zod';
import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare const updateUserSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    first_name?: string;
    last_name?: string;
    email?: string;
}, {
    first_name?: string;
    last_name?: string;
    email?: string;
}>;
type updateUserSchema = z.infer<typeof updateUserSchema>;
export declare class UserUpdateController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(id: string, request: updateUserSchema): Promise<updateUserSchema>;
}
export {};
