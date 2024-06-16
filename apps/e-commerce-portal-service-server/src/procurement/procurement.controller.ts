import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProcurementService } from "./procurement.service";
import { ProcurementControllerBase } from "./base/procurement.controller.base";

@swagger.ApiTags("procurements")
@common.Controller("procurements")
export class ProcurementController extends ProcurementControllerBase {
  constructor(
    protected readonly service: ProcurementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
