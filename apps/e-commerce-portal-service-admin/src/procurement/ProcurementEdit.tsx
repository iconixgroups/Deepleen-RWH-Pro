import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { JobOrderTitle } from "../jobOrder/JobOrderTitle";

export const ProcurementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="item" source="item" />
        <ReferenceInput
          source="jobOrder.id"
          reference="JobOrder"
          label="jobOrder"
        >
          <SelectInput optionText={JobOrderTitle} />
        </ReferenceInput>
        <DateTimeInput label="orderDate" source="orderDate" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <DateTimeInput label="receiveDate" source="receiveDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="supplier" source="supplier" />
      </SimpleForm>
    </Edit>
  );
};
