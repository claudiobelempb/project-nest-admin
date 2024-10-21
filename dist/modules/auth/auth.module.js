"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const common_module_1 = require("../../shared/common/common.module");
const auth_login_controller_1 = require("./controllers/auth-login.controller");
const auth_logout_controller_1 = require("./controllers/auth-logout.controller");
const auth_register_ontroller_1 = require("./controllers/auth-register-ontroller");
const authenticate_controller_1 = require("./controllers/authenticate.controller");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            common_module_1.CommonModule
        ],
        controllers: [
            authenticate_controller_1.AuthenticateController,
            auth_register_ontroller_1.AuthRegisterController,
            auth_login_controller_1.AuthLoginController,
            auth_logout_controller_1.AuthLogoutControler,
        ],
        providers: [prisma_service_1.PrismaService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map