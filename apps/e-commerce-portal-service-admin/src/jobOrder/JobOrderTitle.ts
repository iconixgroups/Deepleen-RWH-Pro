import { JobOrder as TJobOrder } from "../api/jobOrder/JobOrder";

export const JOBORDER_TITLE_FIELD = "title";

export const JobOrderTitle = (record: TJobOrder): string => {
  return record.title?.toString() || String(record.id);
};
