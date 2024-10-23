"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateService = exports.updateRoleSchema = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../shared/prisma/prisma.service");
const zod_1 = require("zod");
exports.updateRoleSchema = zod_1.z.object({
    name: zod_1.z.string(),
});
let RoleUpdateService = class RoleUpdateService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute(id, request) {
        try {
            const entity = await this.prisma.role.findUnique({
                where: {
                    id,
                },
                select: {
                    name: true,
                },
            });
            if (!entity) {
                throw new common_1.NotFoundException('Entiry not found...');
            }
            if (request.name && request.name === entity.name) {
                return entity;
            }
            if (request.name) {
                const existingUser = await this.prisma.user.findUnique({
                    where: { email: request.name },
                });
                if (existingUser) {
                    throw new common_1.ConflictException('Role with same name already exists.');
                }
            }
            return await this.prisma.role.update({
                where: { id },
                data: { ...request },
                select: {
                    name: true,
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException('Entity not Found...');
        }
    }
};
exports.RoleUpdateService = RoleUpdateService;
exports.RoleUpdateService = RoleUpdateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleUpdateService);
//# sourceMappingURL=role.update.service.js.map