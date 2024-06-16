import { Role as TRole } from "../api/role/Role";

export const ROLE_TITLE_FIELD = "name";

export const RoleTitle = (record: TRole): string => {
  return record.name?.toString() || String(record.id);
};
