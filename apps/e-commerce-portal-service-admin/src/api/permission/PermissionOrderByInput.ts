import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  actions?: SortOrder;
  contractRole?: SortOrder;
  createdAt?: SortOrder;
  customerRole?: SortOrder;
  entity?: SortOrder;
  feedbackRole?: SortOrder;
  id?: SortOrder;
  inventoryRole?: SortOrder;
  jobOrderRole?: SortOrder;
  procurementRole?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
};
