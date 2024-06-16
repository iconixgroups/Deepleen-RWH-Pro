import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { JobOrderModule } from "./jobOrder/jobOrder.module";
import { CustomerModule } from "./customer/customer.module";
import { InventoryModule } from "./inventory/inventory.module";
import { ProcurementModule } from "./procurement/procurement.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { ContractModule } from "./contract/contract.module";
import { UserModule } from "./user/user.module";
import { PermissionModule } from "./permission/permission.module";
import { RoleModule } from "./role/role.module";
import { AuthModule } from "./Auth/auth.module";
import { RolesAndPermissionsModule } from "./RolesAndPermissions/rolesandpermissions.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    RabbitMQModule,
    ACLModule,
    AuthModule,
    JobOrderModule,
    CustomerModule,
    InventoryModule,
    ProcurementModule,
    FeedbackModule,
    ContractModule,
    UserModule,
    PermissionModule,
    RoleModule,
    AuthModule,
    RolesAndPermissionsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
