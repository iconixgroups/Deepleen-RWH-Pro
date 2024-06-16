import { ContractCreateNestedManyWithoutJobOrdersInput } from "./ContractCreateNestedManyWithoutJobOrdersInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FeedbackCreateNestedManyWithoutJobOrdersInput } from "./FeedbackCreateNestedManyWithoutJobOrdersInput";
import { ProcurementCreateNestedManyWithoutJobOrdersInput } from "./ProcurementCreateNestedManyWithoutJobOrdersInput";

export type JobOrderCreateInput = {
  contracts?: ContractCreateNestedManyWithoutJobOrdersInput;
  createdDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutJobOrdersInput;
  procurements?: ProcurementCreateNestedManyWithoutJobOrdersInput;
  scheduledDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
