import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcurementServiceBase } from "./base/procurement.service.base";

@Injectable()
export class ProcurementService extends ProcurementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
