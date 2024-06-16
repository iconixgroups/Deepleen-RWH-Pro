import { SortOrder } from "../../util/SortOrder";

export type ProcurementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  jobOrderId?: SortOrder;
  orderDate?: SortOrder;
  quantity?: SortOrder;
  receiveDate?: SortOrder;
  status?: SortOrder;
  supplier?: SortOrder;
  updatedAt?: SortOrder;
};
