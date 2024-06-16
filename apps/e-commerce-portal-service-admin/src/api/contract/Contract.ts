import { JobOrder } from "../jobOrder/JobOrder";

export type Contract = {
  contractDetails: string | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  jobOrder?: JobOrder | null;
  startDate: Date | null;
  updatedAt: Date;
};
