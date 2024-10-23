import { PrismaService } from 'src/shared/prisma/prisma.service';
import { z } from 'zod';
export declare const updateRoleSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
}, {
    name?: string;
}>;
export type updateRoleSchema = z.infer<typeof updateRoleSchema>;
export declare class RoleUpdateService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    execute(id: string, request: updateRoleSchema): Promise<updateRoleSchema>;
}
