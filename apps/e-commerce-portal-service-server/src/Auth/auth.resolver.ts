import * as graphql from "@nestjs/graphql";
import { LoginInput } from "../auth/LoginInput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Query(() => String)
  async Login(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => String)
  async UserLogin(
    @graphql.Args()
    args: LoginInput
  ): Promise<string> {
    return this.service.UserLogin(args);
  }
}
