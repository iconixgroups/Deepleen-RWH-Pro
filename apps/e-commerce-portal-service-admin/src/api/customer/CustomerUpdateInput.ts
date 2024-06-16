import { FeedbackUpdateManyWithoutCustomersInput } from "./FeedbackUpdateManyWithoutCustomersInput";
import { JobOrderUpdateManyWithoutCustomersInput } from "./JobOrderUpdateManyWithoutCustomersInput";
import { RoleUpdateManyWithoutCustomersInput } from "./RoleUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCustomersInput;
  jobOrders?: JobOrderUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  roles?: RoleUpdateManyWithoutCustomersInput;
  subscriptionDate?: Date | null;
};
