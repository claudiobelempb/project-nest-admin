import { Module } from '@nestjs/common';
import { CommonModule } from 'src/shared/common/common.module';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { RoleCreateController } from './controllers/role-create.controller';
import { RoleCreateService } from './services/role-create.service';
import { RoleFindAllController } from './controllers/role-finalAll.controller';
import { RoleFindAllService } from './services/role-findAll.service';
import { RoleUpdateController } from './controllers/role-update.controller';
import { RoleDeleteController } from './controllers/role-delete.controller';
import { RoleFindByIdController } from './controllers/role-findbyid.controller';
import { RoleFindByIdService } from './services/role.findbyid.service';
import { RoleDeleteService } from './services/role.delete.service';
import { RoleUpdateService } from './services/role.update.service';

@Module({
  imports: [],
  controllers: [
    RoleCreateController,
    RoleFindByIdController,
    RoleUpdateController,
    RoleDeleteController,
    RoleFindAllController,
  ],
  providers: [
    CommonModule,
    PrismaService,
    RoleCreateService,
    RoleDeleteService,
    RoleFindByIdService,
    RoleUpdateService,
    RoleFindAllService,
  ],
})
export class RoleModule {}
