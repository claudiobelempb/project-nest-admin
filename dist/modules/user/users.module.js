"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./services/users.service");
const common_module_1 = require("../../shared/common/common.module");
const user_delete_controller_1 = require("./controllers/user-delete.controller");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const user_create_controller_1 = require("./controllers/user-create.controller");
const user_findall_controller_1 = require("./controllers/user-findall.controller");
const user_findbyid__controller_1 = require("./controllers/user-findbyid..controller");
const user_profile_controller_1 = require("./controllers/user-profile.controller");
const user_update_controller_1 = require("./controllers/user-update.controller");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            user_findall_controller_1.UserFindAllControler,
            user_findbyid__controller_1.UserFindByIdControler,
            user_create_controller_1.UserCreateController,
            user_profile_controller_1.UserProfileControler,
            user_update_controller_1.UserUpdateController,
            user_delete_controller_1.UserDeleteController
        ],
        providers: [users_service_1.UsersService, common_module_1.CommonModule, prisma_service_1.PrismaService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map