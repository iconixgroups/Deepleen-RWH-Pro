import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractServiceBase } from "./base/contract.service.base";

@Injectable()
export class ContractService extends ContractServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
