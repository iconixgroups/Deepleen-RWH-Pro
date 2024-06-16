import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionWhereInput = {
  actions?: "Option1";
  contractRole?: StringNullableFilter;
  customerRole?: StringNullableFilter;
  entity?: StringNullableFilter;
  feedbackRole?: StringNullableFilter;
  id?: StringFilter;
  inventoryRole?: StringNullableFilter;
  jobOrderRole?: StringNullableFilter;
  procurementRole?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
};
