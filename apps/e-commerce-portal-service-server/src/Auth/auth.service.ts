import { Injectable } from "@nestjs/common";
import { LoginInput } from "../auth/LoginInput";

@Injectable()
export class AuthService {
  constructor() {}
  async Login(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UserLogin(args: LoginInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
