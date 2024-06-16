import { ContractUpdateManyWithoutJobOrdersInput } from "./ContractUpdateManyWithoutJobOrdersInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FeedbackUpdateManyWithoutJobOrdersInput } from "./FeedbackUpdateManyWithoutJobOrdersInput";
import { ProcurementUpdateManyWithoutJobOrdersInput } from "./ProcurementUpdateManyWithoutJobOrdersInput";

export type JobOrderUpdateInput = {
  contracts?: ContractUpdateManyWithoutJobOrdersInput;
  createdDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutJobOrdersInput;
  procurements?: ProcurementUpdateManyWithoutJobOrdersInput;
  scheduledDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
