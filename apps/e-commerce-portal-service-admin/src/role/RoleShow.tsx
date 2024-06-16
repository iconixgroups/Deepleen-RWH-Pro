import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ROLE_TITLE_FIELD } from "./RoleTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const RoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Business Analyst" source="businessAnalyst" />
        <TextField label="Business Manager" source="businessManager" />
        <TextField label="CEO" source="ceo" />
        <TextField label="Contracts Manager" source="contractsManager" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Customer Service Representative"
          source="customerServiceRepresentative"
        />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Inventory Manager" source="inventoryManager" />
        <TextField label="name" source="name" />
        <TextField label="Procurement Manager" source="procurementManager" />
        <TextField label="Sales Representative" source="salesRepresentative" />
        <TextField label="System Administrator" source="systemAdministrator" />
        <TextField label="Technician" source="technician" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Permission"
          target="roleId"
          label="Permissions"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
