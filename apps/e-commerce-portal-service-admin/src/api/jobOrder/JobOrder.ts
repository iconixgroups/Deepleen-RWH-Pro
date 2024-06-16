import { Contract } from "../contract/Contract";
import { Customer } from "../customer/Customer";
import { Feedback } from "../feedback/Feedback";
import { Procurement } from "../procurement/Procurement";

export type JobOrder = {
  contracts?: Array<Contract>;
  createdAt: Date;
  createdDate: Date | null;
  customer?: Customer | null;
  description: string | null;
  feedbacks?: Array<Feedback>;
  id: string;
  procurements?: Array<Procurement>;
  scheduledDate: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
