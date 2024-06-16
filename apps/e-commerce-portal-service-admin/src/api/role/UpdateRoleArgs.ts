import { RoleWhereUniqueInput } from "./RoleWhereUniqueInput";
import { RoleUpdateInput } from "./RoleUpdateInput";

export type UpdateRoleArgs = {
  where: RoleWhereUniqueInput;
  data: RoleUpdateInput;
};
