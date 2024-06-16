import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobOrderServiceBase } from "./base/jobOrder.service.base";

@Injectable()
export class JobOrderService extends JobOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
