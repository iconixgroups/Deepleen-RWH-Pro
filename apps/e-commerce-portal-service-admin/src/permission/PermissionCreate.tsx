import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { RoleTitle } from "../role/RoleTitle";

export const PermissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="actions"
          label="actions"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="contractRole" source="contractRole" />
        <TextInput label="customerRole" source="customerRole" />
        <TextInput label="entity" source="entity" />
        <TextInput label="feedbackRole" source="feedbackRole" />
        <TextInput label="inventoryRole" source="inventoryRole" />
        <TextInput label="jobOrderRole" source="jobOrderRole" />
        <TextInput label="procurementRole" source="procurementRole" />
        <ReferenceInput source="role.id" reference="Role" label="role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
