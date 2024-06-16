import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";

export type RoleWhereInput = {
  businessAnalyst?: StringNullableFilter;
  businessManager?: StringNullableFilter;
  ceo?: StringNullableFilter;
  contractsManager?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  customerServiceRepresentative?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  inventoryManager?: StringNullableFilter;
  name?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
  procurementManager?: StringNullableFilter;
  salesRepresentative?: StringNullableFilter;
  systemAdministrator?: StringNullableFilter;
  technician?: StringNullableFilter;
};
