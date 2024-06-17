/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  JobOrder as PrismaJobOrder,
  Contract as PrismaContract,
  Feedback as PrismaFeedback,
  Procurement as PrismaProcurement,
  Customer as PrismaCustomer,
} from "@prisma/client";

import { JobOrderCreateInput } from "./JobOrderCreateInput";
import { JobOrder } from "./JobOrder";

export class JobOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.JobOrderCountArgs, "select">): Promise<number> {
    return this.prisma.jobOrder.count(args);
  }

  async jobOrders(
    args: Prisma.JobOrderFindManyArgs
  ): Promise<PrismaJobOrder[]> {
    return this.prisma.jobOrder.findMany(args);
  }
  async jobOrder(
    args: Prisma.JobOrderFindUniqueArgs
  ): Promise<PrismaJobOrder | null> {
    return this.prisma.jobOrder.findUnique(args);
  }
  async createJobOrder(
    args: Prisma.JobOrderCreateArgs
  ): Promise<PrismaJobOrder> {
    return this.prisma.jobOrder.create(args);
  }
  async updateJobOrder(
    args: Prisma.JobOrderUpdateArgs
  ): Promise<PrismaJobOrder> {
    return this.prisma.jobOrder.update(args);
  }
  async deleteJobOrder(
    args: Prisma.JobOrderDeleteArgs
  ): Promise<PrismaJobOrder> {
    return this.prisma.jobOrder.delete(args);
  }

  async findContracts(
    parentId: string,
    args: Prisma.ContractFindManyArgs
  ): Promise<PrismaContract[]> {
    return this.prisma.jobOrder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .contracts(args);
  }

  async findFeedbacks(
    parentId: string,
    args: Prisma.FeedbackFindManyArgs
  ): Promise<PrismaFeedback[]> {
    return this.prisma.jobOrder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .feedbacks(args);
  }

  async findProcurements(
    parentId: string,
    args: Prisma.ProcurementFindManyArgs
  ): Promise<PrismaProcurement[]> {
    return this.prisma.jobOrder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .procurements(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.jobOrder
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
  async CreateJobOrder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async InitiateJobOrder(args: JobOrderCreateInput): Promise<JobOrder> {
    throw new Error("Not implemented");
  }
}
