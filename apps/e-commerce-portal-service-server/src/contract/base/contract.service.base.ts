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
  Contract as PrismaContract,
  JobOrder as PrismaJobOrder,
} from "@prisma/client";

export class ContractServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ContractCountArgs, "select">): Promise<number> {
    return this.prisma.contract.count(args);
  }

  async contracts(
    args: Prisma.ContractFindManyArgs
  ): Promise<PrismaContract[]> {
    return this.prisma.contract.findMany(args);
  }
  async contract(
    args: Prisma.ContractFindUniqueArgs
  ): Promise<PrismaContract | null> {
    return this.prisma.contract.findUnique(args);
  }
  async createContract(
    args: Prisma.ContractCreateArgs
  ): Promise<PrismaContract> {
    return this.prisma.contract.create(args);
  }
  async updateContract(
    args: Prisma.ContractUpdateArgs
  ): Promise<PrismaContract> {
    return this.prisma.contract.update(args);
  }
  async deleteContract(
    args: Prisma.ContractDeleteArgs
  ): Promise<PrismaContract> {
    return this.prisma.contract.delete(args);
  }

  async getJobOrder(parentId: string): Promise<PrismaJobOrder | null> {
    return this.prisma.contract
      .findUnique({
        where: { id: parentId },
      })
      .jobOrder();
  }
}
