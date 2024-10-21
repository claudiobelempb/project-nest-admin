import { PrismaService } from "src/shared/prisma/prisma.service";
import { z } from "zod";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
}, {
    email?: string;
    password?: string;
}>;
type loginSchemaType = z.infer<typeof loginSchema>;
export declare class AuthLoginController {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    handle(request: loginSchemaType, response: Response): Promise<{
        email: string;
        password: string;
        id: string;
        first_name: string;
        last_name: string;
        active: boolean;
    }>;
}
export {};
