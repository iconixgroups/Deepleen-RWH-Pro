import { FeedbackCreateNestedManyWithoutCustomersInput } from "./FeedbackCreateNestedManyWithoutCustomersInput";
import { JobOrderCreateNestedManyWithoutCustomersInput } from "./JobOrderCreateNestedManyWithoutCustomersInput";
import { RoleCreateNestedManyWithoutCustomersInput } from "./RoleCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCustomersInput;
  jobOrders?: JobOrderCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  roles?: RoleCreateNestedManyWithoutCustomersInput;
  subscriptionDate?: Date | null;
};
