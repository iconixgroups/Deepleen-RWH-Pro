import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobOrderService } from "./jobOrder.service";
import { JobOrderControllerBase } from "./base/jobOrder.controller.base";

@swagger.ApiTags("jobOrders")
@common.Controller("jobOrders")
export class JobOrderController extends JobOrderControllerBase {
  constructor(
    protected readonly service: JobOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
