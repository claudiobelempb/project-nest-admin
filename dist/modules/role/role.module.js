"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const common_module_1 = require("../../shared/common/common.module");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const role_create_controller_1 = require("./controllers/role-create.controller");
const role_create_service_1 = require("./services/role-create.service");
const role_finalAll_controller_1 = require("./controllers/role-finalAll.controller");
const role_findAll_service_1 = require("./services/role-findAll.service");
const role_update_controller_1 = require("./controllers/role-update.controller");
const role_delete_controller_1 = require("./controllers/role-delete.controller");
const role_findbyid_controller_1 = require("./controllers/role-findbyid.controller");
const role_findbyid_service_1 = require("./services/role.findbyid.service");
const role_delete_service_1 = require("./services/role.delete.service");
const role_update_service_1 = require("./services/role.update.service");
let RoleModule = class RoleModule {
};
exports.RoleModule = RoleModule;
exports.RoleModule = RoleModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            role_create_controller_1.RoleCreateController,
            role_findbyid_controller_1.RoleFindByIdController,
            role_update_controller_1.RoleUpdateController,
            role_delete_controller_1.RoleDeleteController,
            role_finalAll_controller_1.RoleFindAllController,
        ],
        providers: [
            common_module_1.CommonModule,
            prisma_service_1.PrismaService,
            role_create_service_1.RoleCreateService,
            role_delete_service_1.RoleDeleteService,
            role_findbyid_service_1.RoleFindByIdService,
            role_update_service_1.RoleUpdateService,
            role_findAll_service_1.RoleFindAllService,
        ],
    })
], RoleModule);
//# sourceMappingURL=role.module.js.map