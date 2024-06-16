import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  itemName?: StringNullableFilter;
  location?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
