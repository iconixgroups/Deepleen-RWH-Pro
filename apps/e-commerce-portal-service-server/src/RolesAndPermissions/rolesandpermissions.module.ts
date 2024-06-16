import { Module } from "@nestjs/common";
import { RolesAndPermissionsService } from "./rolesandpermissions.service";
import { RolesAndPermissionsController } from "./rolesandpermissions.controller";
import { RolesAndPermissionsResolver } from "./rolesandpermissions.resolver";

@Module({
  controllers: [RolesAndPermissionsController],
  providers: [RolesAndPermissionsService, RolesAndPermissionsResolver],
  exports: [RolesAndPermissionsService],
})
export class RolesAndPermissionsModule {}
