import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "id";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.id?.toString() || String(record.id);
};
