import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { JobOrderTitle } from "../jobOrder/JobOrderTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobOrder.id"
          reference="JobOrder"
          label="jobOrder"
        >
          <SelectInput optionText={JobOrderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="rating" source="rating" />
        <DateTimeInput label="submittedDate" source="submittedDate" />
      </SimpleForm>
    </Edit>
  );
};
