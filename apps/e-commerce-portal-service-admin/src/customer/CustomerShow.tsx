import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { JOBORDER_TITLE_FIELD } from "../jobOrder/JobOrderTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="subscriptionDate" source="subscriptionDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Feedback"
          target="customerId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="jobOrder"
              source="joborder.id"
              reference="JobOrder"
            >
              <TextField source={JOBORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rating" source="rating" />
            <TextField label="submittedDate" source="submittedDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="JobOrder"
          target="customerId"
          label="JobOrders"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="createdDate" source="createdDate" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="scheduledDate" source="scheduledDate" />
            <TextField label="status" source="status" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Role" target="customerId" label="Roles">
          <Datagrid rowClick="show">
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
            <TextField
              label="Procurement Manager"
              source="procurementManager"
            />
            <TextField
              label="Sales Representative"
              source="salesRepresentative"
            />
            <TextField
              label="System Administrator"
              source="systemAdministrator"
            />
            <TextField label="Technician" source="technician" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
