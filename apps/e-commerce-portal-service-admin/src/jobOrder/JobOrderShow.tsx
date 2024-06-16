import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { JOBORDER_TITLE_FIELD } from "./JobOrderTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const JobOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Contract"
          target="jobOrderId"
          label="Contracts"
        >
          <Datagrid rowClick="show">
            <TextField label="contractDetails" source="contractDetails" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="jobOrder"
              source="joborder.id"
              reference="JobOrder"
            >
              <TextField source={JOBORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Feedback"
          target="jobOrderId"
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
          reference="Procurement"
          target="jobOrderId"
          label="Procurements"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="item" source="item" />
            <ReferenceField
              label="jobOrder"
              source="joborder.id"
              reference="JobOrder"
            >
              <TextField source={JOBORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="orderDate" source="orderDate" />
            <TextField label="quantity" source="quantity" />
            <TextField label="receiveDate" source="receiveDate" />
            <TextField label="status" source="status" />
            <TextField label="supplier" source="supplier" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
