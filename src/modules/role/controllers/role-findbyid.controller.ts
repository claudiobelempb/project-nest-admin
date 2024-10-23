import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RoleFindByIdService } from '../services/role.findbyid.service';

@Controller('roles')
export class RoleFindByIdController {
  constructor(private readonly service: RoleFindByIdService) {}

  @Get(':id')
  @HttpCode(200)
  async handle(@Param('id') id: string): Promise<Role> {
    return this.service.execute(id);
  }
}
