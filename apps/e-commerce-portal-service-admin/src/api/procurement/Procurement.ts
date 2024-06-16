import { JobOrder } from "../jobOrder/JobOrder";

export type Procurement = {
  createdAt: Date;
  id: string;
  item: string | null;
  jobOrder?: JobOrder | null;
  orderDate: Date | null;
  quantity: number | null;
  receiveDate: Date | null;
  status?: "Option1" | null;
  supplier: string | null;
  updatedAt: Date;
};
