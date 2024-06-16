import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionCreateInput = {
  actions?: "Option1" | null;
  contractRole?: string | null;
  customerRole?: string | null;
  entity?: string | null;
  feedbackRole?: string | null;
  inventoryRole?: string | null;
  jobOrderRole?: string | null;
  procurementRole?: string | null;
  role?: RoleWhereUniqueInput | null;
};
