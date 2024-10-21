import { PrismaService } from 'src/shared/prisma/prisma.service';
import { z } from 'zod';
export declare const registerSchema: z.ZodObject<{
    last_name: z.ZodString;
    first_name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    password_confirm: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    password_confirm?: string;
}, {
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    password_confirm?: string;
}>;
type registerSchema = z.infer<typeof registerSchema>;
export declare class AuthRegisterController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(request: registerSchema): Promise<registerSchema>;
}
export {};
