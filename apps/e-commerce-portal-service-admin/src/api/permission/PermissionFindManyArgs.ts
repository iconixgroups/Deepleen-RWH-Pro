import { PermissionWhereInput } from "./PermissionWhereInput";
import { PermissionOrderByInput } from "./PermissionOrderByInput";

export type PermissionFindManyArgs = {
  where?: PermissionWhereInput;
  orderBy?: Array<PermissionOrderByInput>;
  skip?: number;
  take?: number;
};
