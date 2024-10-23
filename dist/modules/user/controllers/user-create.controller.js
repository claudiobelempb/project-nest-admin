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
exports.UserCreateController = exports.createUserSchema = void 0;
const bcrypt = require("bcrypt");
const zod_1 = require("zod");
const common_1 = require("@nestjs/common");
const zod_validation_pipe_1 = require("../../../shared/pipes/zod-validation-pipe");
const prisma_service_1 = require("../../../shared/prisma/prisma.service");
const auth_guard_1 = require("../../auth/auth.guard");
exports.createUserSchema = zod_1.z.object({
    first_name: zod_1.z.string(),
    last_name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    password_confirm: zod_1.z.string(),
});
let UserCreateController = class UserCreateController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async handle(request) {
        const { first_name, last_name, email, password, password_confirm } = request;
        const hashed = await bcrypt.hash(password, 8);
        if (password !== password_confirm) {
            throw new common_1.BadRequestException('Password do not match!');
        }
        const userWithSameEmail = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (userWithSameEmail) {
            throw new common_1.ConflictException('User with same e-mail already exists.');
        }
        return await this.prisma.user.create({
            data: {
                first_name,
                last_name,
                email,
                password: hashed,
            },
            select: {
                first_name: true,
                last_name: true,
                email: true,
                active: true,
                createdAt: true,
            },
        });
    }
};
exports.UserCreateController = UserCreateController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(exports.createUserSchema)),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCreateController.prototype, "handle", null);
exports.UserCreateController = UserCreateController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserCreateController);
//# sourceMappingURL=user-create.controller.js.map