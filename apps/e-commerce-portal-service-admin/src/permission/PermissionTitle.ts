import { Permission as TPermission } from "../api/permission/Permission";

export const PERMISSION_TITLE_FIELD = "contractRole";

export const PermissionTitle = (record: TPermission): string => {
  return record.contractRole?.toString() || String(record.id);
};
