import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/user/services/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<{
        access_token: string;
    }>;
}
