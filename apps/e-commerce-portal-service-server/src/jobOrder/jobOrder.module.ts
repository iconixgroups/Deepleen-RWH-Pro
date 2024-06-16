import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobOrderModuleBase } from "./base/jobOrder.module.base";
import { JobOrderService } from "./jobOrder.service";
import { JobOrderController } from "./jobOrder.controller";
import { JobOrderResolver } from "./jobOrder.resolver";

@Module({
  imports: [JobOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobOrderController],
  providers: [JobOrderService, JobOrderResolver],
  exports: [JobOrderService],
})
export class JobOrderModule {}
