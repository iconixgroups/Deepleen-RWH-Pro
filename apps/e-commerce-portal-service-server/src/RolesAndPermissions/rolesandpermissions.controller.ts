import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RolesAndPermissionsService } from "./rolesandpermissions.service";

@swagger.ApiTags("rolesAndPermissions")
@common.Controller("rolesAndPermissions")
export class RolesAndPermissionsController {
  constructor(protected readonly service: RolesAndPermissionsService) {}
}
