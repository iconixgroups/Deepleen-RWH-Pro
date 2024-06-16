import { JobOrderWhereUniqueInput } from "../jobOrder/JobOrderWhereUniqueInput";

export type ContractCreateInput = {
  contractDetails?: string | null;
  endDate?: Date | null;
  jobOrder?: JobOrderWhereUniqueInput | null;
  startDate?: Date | null;
};
