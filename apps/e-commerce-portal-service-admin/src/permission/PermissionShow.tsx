import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const PermissionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="actions" source="actions" />
        <TextField label="contractRole" source="contractRole" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerRole" source="customerRole" />
        <TextField label="entity" source="entity" />
        <TextField label="feedbackRole" source="feedbackRole" />
        <TextField label="ID" source="id" />
        <TextField label="inventoryRole" source="inventoryRole" />
        <TextField label="jobOrderRole" source="jobOrderRole" />
        <TextField label="procurementRole" source="procurementRole" />
        <ReferenceField label="role" source="role.id" reference="Role">
          <TextField source={ROLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
