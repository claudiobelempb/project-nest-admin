import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import { PrismaService } from "src/shared/prisma/prisma.service";
export declare class AuthLogoutControler {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    hamdle(response: Response): Promise<{
        message: string;
    }>;
}
