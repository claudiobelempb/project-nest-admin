import { Controller, Delete, HttpCode, Param } from '@nestjs/common';
import { RoleDeleteService } from '../services/role.delete.service';

@Controller('roles')
export class RoleDeleteController {
  constructor(private readonly service: RoleDeleteService) {}

  @Delete(':id')
  @HttpCode(204)
  async handle(@Param('id') id: string): Promise<void> {
    this.service.execute(id);
  }
}
