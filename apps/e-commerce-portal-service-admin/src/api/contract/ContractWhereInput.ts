import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobOrderWhereUniqueInput } from "../jobOrder/JobOrderWhereUniqueInput";

export type ContractWhereInput = {
  contractDetails?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  jobOrder?: JobOrderWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
