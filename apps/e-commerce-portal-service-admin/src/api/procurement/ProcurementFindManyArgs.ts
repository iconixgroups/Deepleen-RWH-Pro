import { ProcurementWhereInput } from "./ProcurementWhereInput";
import { ProcurementOrderByInput } from "./ProcurementOrderByInput";

export type ProcurementFindManyArgs = {
  where?: ProcurementWhereInput;
  orderBy?: Array<ProcurementOrderByInput>;
  skip?: number;
  take?: number;
};
