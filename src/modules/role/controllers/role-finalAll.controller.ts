import { Controller, Get } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RoleFindAllService } from '../services/role-findAll.service';

@Controller('roles')
export class RoleFindAllController {
  constructor(private readonly roleFindAllService: RoleFindAllService) {}

  @Get()
  async handle(): Promise<Role[]> {
    return await this.roleFindAllService.execute();
  }
}
