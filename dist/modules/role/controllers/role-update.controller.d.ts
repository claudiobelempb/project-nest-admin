import { RoleUpdateService, updateRoleSchema } from '../services/role.update.service';
export declare class RoleUpdateController {
    private readonly service;
    constructor(service: RoleUpdateService);
    handle(id: string, request: updateRoleSchema): Promise<updateRoleSchema>;
}
