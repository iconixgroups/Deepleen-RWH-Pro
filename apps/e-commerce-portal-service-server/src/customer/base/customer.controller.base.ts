/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CustomerService } from "../customer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { Customer } from "./Customer";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { FeedbackFindManyArgs } from "../../feedback/base/FeedbackFindManyArgs";
import { Feedback } from "../../feedback/base/Feedback";
import { FeedbackWhereUniqueInput } from "../../feedback/base/FeedbackWhereUniqueInput";
import { JobOrderFindManyArgs } from "../../jobOrder/base/JobOrderFindManyArgs";
import { JobOrder } from "../../jobOrder/base/JobOrder";
import { JobOrderWhereUniqueInput } from "../../jobOrder/base/JobOrderWhereUniqueInput";
import { RoleFindManyArgs } from "../../role/base/RoleFindManyArgs";
import { Role } from "../../role/base/Role";
import { RoleWhereUniqueInput } from "../../role/base/RoleWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerControllerBase {
  constructor(
    protected readonly service: CustomerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCustomer(
    @common.Body() data: CustomerCreateInput
  ): Promise<Customer> {
    return await this.service.createCustomer({
      data: data,
      select: {
        address: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        subscriptionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customers(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.customers({
      ...args,
      select: {
        address: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        subscriptionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.customer({
      where: params,
      select: {
        address: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        subscriptionDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCustomer(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phone: true,
          subscriptionDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCustomer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer({
        where: params,
        select: {
          address: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phone: true,
          subscriptionDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/feedbacks")
  @ApiNestedQuery(FeedbackFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  async findFeedbacks(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Feedback[]> {
    const query = plainToClass(FeedbackFindManyArgs, request.query);
    const results = await this.service.findFeedbacks(params.id, {
      ...query,
      select: {
        comments: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        jobOrder: {
          select: {
            id: true,
          },
        },

        rating: true,
        submittedDate: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectFeedbacks(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateFeedbacks(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectFeedbacks(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/jobOrders")
  @ApiNestedQuery(JobOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "JobOrder",
    action: "read",
    possession: "any",
  })
  async findJobOrders(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<JobOrder[]> {
    const query = plainToClass(JobOrderFindManyArgs, request.query);
    const results = await this.service.findJobOrders(params.id, {
      ...query,
      select: {
        createdAt: true,
        createdDate: true,

        customer: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        scheduledDate: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/jobOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectJobOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: JobOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobOrders: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/jobOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateJobOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: JobOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobOrders: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/jobOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectJobOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: JobOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobOrders: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/roles")
  @ApiNestedQuery(RoleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "read",
    possession: "any",
  })
  async findRoles(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Role[]> {
    const query = plainToClass(RoleFindManyArgs, request.query);
    const results = await this.service.findRoles(params.id, {
      ...query,
      select: {
        businessAnalyst: true,
        businessManager: true,
        ceo: true,
        contractsManager: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        customerServiceRepresentative: true,
        description: true,
        id: true,
        inventoryManager: true,
        name: true,
        procurementManager: true,
        salesRepresentative: true,
        systemAdministrator: true,
        technician: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/roles")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectRoles(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: RoleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roles: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/roles")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateRoles(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: RoleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roles: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/roles")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectRoles(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: RoleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roles: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/customer/subscriptions")
  @swagger.ApiOkResponse({
    type: Customer,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AddSubscription(
    @common.Body()
    body: CustomerCreateInput
  ): Promise<Customer> {
    return this.service.AddSubscription(body);
  }

  @common.Get("/:id/create-subscription")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateSubscription(
    @common.Body()
    body: CustomerCreateInput
  ): Promise<string> {
    return this.service.CreateSubscription(body);
  }

  @common.Get("/:id/proceed-payment")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ProceedPayment(
    @common.Body()
    body: CustomerCreateInput
  ): Promise<string> {
    return this.service.ProceedPayment(body);
  }

  @common.Post("/customer/payments")
  @swagger.ApiOkResponse({
    type: Customer,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ProcessPayment(
    @common.Body()
    body: CustomerCreateInput
  ): Promise<Customer> {
    return this.service.ProcessPayment(body);
  }
}
