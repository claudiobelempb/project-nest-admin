"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        try {
            const jwt = request.cookies['jwt'];
            return this.jwtService.verify(jwt);
        }
        catch (error) {
            return false;
        }
    }
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map