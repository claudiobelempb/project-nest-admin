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
exports.AuthLoginController = exports.loginSchema = void 0;
const common_1 = require("@nestjs/common");
const zod_validation_pipe_1 = require("../../../shared/pipes/zod-validation-pipe");
const prisma_service_1 = require("../../../shared/prisma/prisma.service");
const bcrypt = require("bcrypt");
const zod_1 = require("zod");
const jwt_1 = require("@nestjs/jwt");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
let AuthLoginController = class AuthLoginController {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async handle(request, response) {
        const { email, password } = request;
        const user = await this.prisma.user.findUnique({
            where: { email },
            select: { id: true, first_name: true, last_name: true, email: true, password: true, active: true, }
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
        const token = await this.jwtService.signAsync({
            id: user.id,
        });
        response.cookie('jwt', token, { httpOnly: true });
        return user;
    }
};
exports.AuthLoginController = AuthLoginController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(exports.loginSchema)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthLoginController.prototype, "handle", null);
exports.AuthLoginController = AuthLoginController = __decorate([
    (0, common_1.Controller)('/login'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthLoginController);
//# sourceMappingURL=auth-login.controller.js.map