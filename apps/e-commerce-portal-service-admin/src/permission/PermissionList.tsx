import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const PermissionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Permissions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
