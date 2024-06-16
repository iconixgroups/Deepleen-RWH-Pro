import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";
import { LoginInput } from "../auth/LoginInput";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Get("/:id/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: LoginInput
  ): Promise<string> {
        return this.service.Login(body);
      }

  @common.Post("/user-login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserLogin(
    @common.Body()
    body: LoginInput
  ): Promise<string> {
        return this.service.UserLogin(body);
      }
}
