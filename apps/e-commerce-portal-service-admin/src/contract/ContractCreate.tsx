import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { JobOrderTitle } from "../jobOrder/JobOrderTitle";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contractDetails" multiline source="contractDetails" />
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput
          source="jobOrder.id"
          reference="JobOrder"
          label="jobOrder"
        >
          <SelectInput optionText={JobOrderTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
