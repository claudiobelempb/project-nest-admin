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
exports.RoleCreateController = void 0;
const common_1 = require("@nestjs/common");
const role_create_service_1 = require("../services/role-create.service");
let RoleCreateController = class RoleCreateController {
    constructor(roleCreateService) {
        this.roleCreateService = roleCreateService;
    }
    async handle(request) {
        return await this.roleCreateService.execute(request);
    }
};
exports.RoleCreateController = RoleCreateController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleCreateController.prototype, "handle", null);
exports.RoleCreateController = RoleCreateController = __decorate([
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [role_create_service_1.RoleCreateService])
], RoleCreateController);
//# sourceMappingURL=role-create.controller.js.map