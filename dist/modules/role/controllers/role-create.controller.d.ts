import { Role } from '@prisma/client';
import { RoleCreateService } from '../services/role-create.service';
export declare class RoleCreateController {
    private readonly roleCreateService;
    constructor(roleCreateService: RoleCreateService);
    handle(request: Role): Promise<Role>;
}
