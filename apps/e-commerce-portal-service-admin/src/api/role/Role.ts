import { Customer } from "../customer/Customer";
import { Permission } from "../permission/Permission";

export type Role = {
  businessAnalyst: string | null;
  businessManager: string | null;
  ceo: string | null;
  contractsManager: string | null;
  createdAt: Date;
  customer?: Customer | null;
  customerServiceRepresentative: string | null;
  description: string | null;
  id: string;
  inventoryManager: string | null;
  name: string | null;
  permissions?: Array<Permission>;
  procurementManager: string | null;
  salesRepresentative: string | null;
  systemAdministrator: string | null;
  technician: string | null;
  updatedAt: Date;
};
