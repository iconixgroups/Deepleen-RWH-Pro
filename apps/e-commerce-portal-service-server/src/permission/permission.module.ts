import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PermissionModuleBase } from "./base/permission.module.base";
import { PermissionService } from "./permission.service";
import { PermissionController } from "./permission.controller";
import { PermissionResolver } from "./permission.resolver";

@Module({
  imports: [PermissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [PermissionController],
  providers: [PermissionService, PermissionResolver],
  exports: [PermissionService],
})
export class PermissionModule {}
