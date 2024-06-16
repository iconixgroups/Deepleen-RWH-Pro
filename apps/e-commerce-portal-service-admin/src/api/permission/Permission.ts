import { Role } from "../role/Role";

export type Permission = {
  actions?: "Option1" | null;
  contractRole: string | null;
  createdAt: Date;
  customerRole: string | null;
  entity: string | null;
  feedbackRole: string | null;
  id: string;
  inventoryRole: string | null;
  jobOrderRole: string | null;
  procurementRole: string | null;
  role?: Role | null;
  updatedAt: Date;
};
