import { z } from 'zod';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserCreateDTO } from '../dto/user-create.dto';
export declare const createUserSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    password_confirm: z.ZodString;
    role_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    password_confirm?: string;
    role_id?: string;
}, {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    password_confirm?: string;
    role_id?: string;
}>;
type createUserSchema = z.infer<typeof createUserSchema>;
export declare class UserCreateController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(request: createUserSchema): Promise<UserCreateDTO>;
}
export {};
