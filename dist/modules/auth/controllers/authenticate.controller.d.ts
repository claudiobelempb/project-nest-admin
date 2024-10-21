import { JwtService } from '@nestjs/jwt';
import { z } from 'zod';
export declare const authenticateSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    email?: string;
    password?: string;
}, {
    name?: string;
    email?: string;
    password?: string;
}>;
type authenticateSchema = z.infer<typeof authenticateSchema>;
export declare class AuthenticateController {
    private jwt;
    constructor(jwt: JwtService);
    handle(request: authenticateSchema): Promise<string>;
}
export {};
