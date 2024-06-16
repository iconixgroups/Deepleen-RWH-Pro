import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  businessAnalyst?: string | null;
  businessManager?: string | null;
  ceo?: string | null;
  contractsManager?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  customerServiceRepresentative?: string | null;
  description?: string | null;
  inventoryManager?: string | null;
  name?: string | null;
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
  procurementManager?: string | null;
  salesRepresentative?: string | null;
  systemAdministrator?: string | null;
  technician?: string | null;
};
