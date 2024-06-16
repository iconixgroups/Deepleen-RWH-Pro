import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  businessAnalyst?: string | null;
  businessManager?: string | null;
  ceo?: string | null;
  contractsManager?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  customerServiceRepresentative?: string | null;
  description?: string | null;
  inventoryManager?: string | null;
  name?: string | null;
  permissions?: PermissionUpdateManyWithoutRolesInput;
  procurementManager?: string | null;
  salesRepresentative?: string | null;
  systemAdministrator?: string | null;
  technician?: string | null;
};
