import * as graphql from "@nestjs/graphql";
import { RolesAndPermissionsService } from "./rolesandpermissions.service";

export class RolesAndPermissionsResolver {
  constructor(protected readonly service: RolesAndPermissionsService) {}
}
