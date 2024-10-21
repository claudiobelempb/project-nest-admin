import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { PrismaService } from "src/shared/prisma/prisma.service";
export declare class UserProfileControler {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    hamdle(request: Request): Promise<{
        email: string;
        first_name: string;
        last_name: string;
        id: string;
        active: boolean;
        createdAt: Date;
    }>;
}
