import { Feedback } from "../feedback/Feedback";
import { JobOrder } from "../jobOrder/JobOrder";
import { Role } from "../role/Role";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  id: string;
  jobOrders?: Array<JobOrder>;
  name: string | null;
  phone: string | null;
  roles?: Array<Role>;
  subscriptionDate: Date | null;
  updatedAt: Date;
};
