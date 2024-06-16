import { Procurement as TProcurement } from "../api/procurement/Procurement";

export const PROCUREMENT_TITLE_FIELD = "item";

export const ProcurementTitle = (record: TProcurement): string => {
  return record.item?.toString() || String(record.id);
};
