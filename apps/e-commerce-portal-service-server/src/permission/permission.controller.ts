import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PermissionService } from "./permission.service";
import { PermissionControllerBase } from "./base/permission.controller.base";

@swagger.ApiTags("permissions")
@common.Controller("permissions")
export class PermissionController extends PermissionControllerBase {
  constructor(
    protected readonly service: PermissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
