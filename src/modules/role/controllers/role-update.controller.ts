import { Body, Controller, HttpCode, Param, Put } from '@nestjs/common';
import {
  RoleUpdateService,
  updateRoleSchema,
} from '../services/role.update.service';
import { z } from 'zod';
import { Role } from '@prisma/client';

@Controller('roles')
export class RoleUpdateController {
  constructor(private readonly service: RoleUpdateService) {}

  @Put(':id')
  @HttpCode(200)
  async handle(
    @Param('id') id: string,
    @Body() request: updateRoleSchema,
  ): Promise<updateRoleSchema> {
    return this.service.execute(id, request);
  }
}
