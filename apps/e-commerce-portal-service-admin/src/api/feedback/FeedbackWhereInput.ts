import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobOrderWhereUniqueInput } from "../jobOrder/JobOrderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FeedbackWhereInput = {
  comments?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  jobOrder?: JobOrderWhereUniqueInput;
  rating?: IntNullableFilter;
  submittedDate?: DateTimeNullableFilter;
};
