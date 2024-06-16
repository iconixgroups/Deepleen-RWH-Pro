import { Customer } from "../customer/Customer";
import { JobOrder } from "../jobOrder/JobOrder";

export type Feedback = {
  comments: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  jobOrder?: JobOrder | null;
  rating: number | null;
  submittedDate: Date | null;
  updatedAt: Date;
};
