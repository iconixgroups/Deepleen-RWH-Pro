import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProcurementModuleBase } from "./base/procurement.module.base";
import { ProcurementService } from "./procurement.service";
import { ProcurementController } from "./procurement.controller";
import { ProcurementResolver } from "./procurement.resolver";

@Module({
  imports: [ProcurementModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProcurementController],
  providers: [ProcurementService, ProcurementResolver],
  exports: [ProcurementService],
})
export class ProcurementModule {}
