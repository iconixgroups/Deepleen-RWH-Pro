import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JOBORDER_TITLE_FIELD } from "../jobOrder/JobOrderTitle";

export const ProcurementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Procurements"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
