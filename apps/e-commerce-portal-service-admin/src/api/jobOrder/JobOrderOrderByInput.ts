import { SortOrder } from "../../util/SortOrder";

export type JobOrderOrderByInput = {
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  scheduledDate?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
