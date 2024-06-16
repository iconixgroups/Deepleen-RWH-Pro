import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { JobOrderWhereUniqueInput } from "../jobOrder/JobOrderWhereUniqueInput";

export type FeedbackUpdateInput = {
  comments?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  jobOrder?: JobOrderWhereUniqueInput | null;
  rating?: number | null;
  submittedDate?: Date | null;
};
