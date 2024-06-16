import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  jobOrderId?: SortOrder;
  rating?: SortOrder;
  submittedDate?: SortOrder;
  updatedAt?: SortOrder;
};
