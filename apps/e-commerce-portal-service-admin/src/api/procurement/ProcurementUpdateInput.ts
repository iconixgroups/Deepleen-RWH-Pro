import { JobOrderWhereUniqueInput } from "../jobOrder/JobOrderWhereUniqueInput";

export type ProcurementUpdateInput = {
  item?: string | null;
  jobOrder?: JobOrderWhereUniqueInput | null;
  orderDate?: Date | null;
  quantity?: number | null;
  receiveDate?: Date | null;
  status?: "Option1" | null;
  supplier?: string | null;
};
