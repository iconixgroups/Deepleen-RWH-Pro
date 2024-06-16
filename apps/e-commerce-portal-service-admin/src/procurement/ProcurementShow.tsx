import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { JOBORDER_TITLE_FIELD } from "../jobOrder/JobOrderTitle";

export const ProcurementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
