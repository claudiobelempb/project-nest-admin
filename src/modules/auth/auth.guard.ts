import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService
    ){}
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        try {
            const jwt = request.cookies['jwt'];
            return this.jwtService.verify(jwt);
        } catch (error) {
            return false;
        }
    }
}