"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_1 = require("./env");
const auth_module_1 = require("./modules/auth/auth.module");
const authenticate_controller_1 = require("./modules/auth/controllers/authenticate.controller");
const prisma_service_1 = require("./shared/prisma/prisma.service");
const auth_register_ontroller_1 = require("./modules/auth/controllers/auth-register-ontroller");
const user_profile_controller_1 = require("./modules/user/controllers/user-profile.controller");
const auth_login_controller_1 = require("./modules/auth/controllers/auth-login.controller");
const auth_logout_controller_1 = require("./modules/auth/controllers/auth-logout.controller");
const user_findall_controller_1 = require("./modules/user/controllers/user-findall.controller");
const user_findbyid__controller_1 = require("./modules/user/controllers/user-findbyid..controller");
const user_create_controller_1 = require("./modules/user/controllers/user-create.controller");
const user_update_controller_1 = require("./modules/user/controllers/user-update.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validate: (env) => env_1.envSchema.parse(env),
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
        ],
        controllers: [
            user_findall_controller_1.UserFindAllControler,
            user_findbyid__controller_1.UserFindByIdControler,
            user_create_controller_1.UserCreateController,
            user_profile_controller_1.UserProfileControler,
            user_update_controller_1.UserUpdateController,
            authenticate_controller_1.AuthenticateController,
            auth_register_ontroller_1.AuthRegisterController,
            auth_login_controller_1.AuthLoginController,
            auth_logout_controller_1.AuthLogoutControler,
        ],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map