import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobOrderWhereUniqueInput } from "../jobOrder/JobOrderWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProcurementWhereInput = {
  id?: StringFilter;
  item?: StringNullableFilter;
  jobOrder?: JobOrderWhereUniqueInput;
  orderDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  receiveDate?: DateTimeNullableFilter;
  status?: "Option1";
  supplier?: StringNullableFilter;
};
