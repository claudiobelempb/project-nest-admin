import { z } from 'zod';
import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare const createUserSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    password_confirm: z.ZodString;
}, "strip", z.ZodTypeAny, {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    password_confirm?: string;
}, {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    password_confirm?: string;
}>;
type createUserSchema = z.infer<typeof createUserSchema>;
export declare class UserCreateController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(request: createUserSchema): Promise<createUserSchema>;
}
export {};
