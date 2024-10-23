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
exports.RoleDeleteController = void 0;
const common_1 = require("@nestjs/common");
const role_delete_service_1 = require("../services/role.delete.service");
let RoleDeleteController = class RoleDeleteController {
    constructor(service) {
        this.service = service;
    }
    async handle(id) {
        this.service.execute(id);
    }
};
exports.RoleDeleteController = RoleDeleteController;
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleDeleteController.prototype, "handle", null);
exports.RoleDeleteController = RoleDeleteController = __decorate([
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [role_delete_service_1.RoleDeleteService])
], RoleDeleteController);
//# sourceMappingURL=role-delete.controller.js.map