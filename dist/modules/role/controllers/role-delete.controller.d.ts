import { RoleDeleteService } from '../services/role.delete.service';
export declare class RoleDeleteController {
    private readonly service;
    constructor(service: RoleDeleteService);
    handle(id: string): Promise<void>;
}
