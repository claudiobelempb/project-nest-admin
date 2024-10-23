import { Body, Controller, Get, Post } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RoleCreateService } from '../services/role-create.service';

@Controller('roles')
export class RoleCreateController {
  constructor(private readonly roleCreateService: RoleCreateService) {}

  @Post()
  async handle(@Body() request: Role): Promise<Role> {
    return await this.roleCreateService.execute(request);
  }
}
