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
exports.UserFindAllControler = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../shared/prisma/prisma.service");
let UserFindAllControler = class UserFindAllControler {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async hamdle(page = 1, pageSize = 10) {
        const take = +pageSize;
        const skip = (+page - 1) * pageSize;
        const [result, total] = await this.prisma.$transaction([
            this.prisma.user.findMany({
                skip,
                take,
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                    active: true,
                    createdAt: true,
                }
            }),
            this.prisma.user.count(),
        ]);
        return {
            content: result,
            page,
            last_page: Math.ceil(total / take),
            total
        };
    }
};
exports.UserFindAllControler = UserFindAllControler;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserFindAllControler.prototype, "hamdle", null);
exports.UserFindAllControler = UserFindAllControler = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserFindAllControler);
//# sourceMappingURL=user-findall.controller.js.map