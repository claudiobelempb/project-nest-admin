import { Role } from '@prisma/client';
import { RoleFindAllService } from '../services/role-findAll.service';
export declare class RoleFindAllController {
    private readonly roleFindAllService;
    constructor(roleFindAllService: RoleFindAllService);
    handle(): Promise<Role[]>;
}
