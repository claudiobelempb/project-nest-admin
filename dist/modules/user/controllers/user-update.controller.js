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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateController = exports.updateUserSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("@nestjs/common");
const zod_validation_pipe_1 = require("../../../shared/pipes/zod-validation-pipe");
const prisma_service_1 = require("../../../shared/prisma/prisma.service");
const auth_guard_1 = require("../../auth/auth.guard");
exports.updateUserSchema = zod_1.z.object({
    first_name: zod_1.z.string(),
    last_name: zod_1.z.string(),
    email: zod_1.z.string().email(),
});
let UserUpdateController = class UserUpdateController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async handle(id, request) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
            select: {
                first_name: true,
                last_name: true,
                email: true,
            }
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        if (request.email && request.email === user.email) {
            return user;
        }
        if (request.email) {
            const existingUser = await this.prisma.user.findUnique({
                where: { email: request.email },
            });
            if (existingUser) {
                throw new common_1.ConflictException('User with same e-mail already exists.');
            }
        }
        return await this.prisma.user.update({
            where: { id },
            data: { ...request },
            select: {
                first_name: true,
                last_name: true,
                email: true,
            },
        });
    }
};
exports.UserUpdateController = UserUpdateController;
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(exports.updateUserSchema)),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserUpdateController.prototype, "handle", null);
exports.UserUpdateController = UserUpdateController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserUpdateController);
//# sourceMappingURL=user-update.controller.js.map