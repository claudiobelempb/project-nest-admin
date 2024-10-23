import { Role } from '@prisma/client';
import { RoleFindByIdService } from '../services/role.findbyid.service';
export declare class RoleFindByIdController {
    private readonly service;
    constructor(service: RoleFindByIdService);
    handle(id: string): Promise<Role>;
}
