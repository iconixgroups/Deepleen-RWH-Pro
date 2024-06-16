import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  contractDetails?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  jobOrderId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
