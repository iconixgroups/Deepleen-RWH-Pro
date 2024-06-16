import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProcurementListRelationFilter } from "../procurement/ProcurementListRelationFilter";

export type JobOrderWhereInput = {
  contracts?: ContractListRelationFilter;
  createdDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  procurements?: ProcurementListRelationFilter;
  scheduledDate?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
