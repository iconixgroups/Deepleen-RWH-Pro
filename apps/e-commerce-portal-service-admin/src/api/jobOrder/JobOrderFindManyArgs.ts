import { JobOrderWhereInput } from "./JobOrderWhereInput";
import { JobOrderOrderByInput } from "./JobOrderOrderByInput";

export type JobOrderFindManyArgs = {
  where?: JobOrderWhereInput;
  orderBy?: Array<JobOrderOrderByInput>;
  skip?: number;
  take?: number;
};
