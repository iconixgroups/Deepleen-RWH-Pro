import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "id";

export const ContractTitle = (record: TContract): string => {
  return record.id?.toString() || String(record.id);
};
