import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContractModuleBase } from "./base/contract.module.base";
import { ContractService } from "./contract.service";
import { ContractController } from "./contract.controller";
import { ContractResolver } from "./contract.resolver";

@Module({
  imports: [ContractModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContractController],
  providers: [ContractService, ContractResolver],
  exports: [ContractService],
})
export class ContractModule {}
