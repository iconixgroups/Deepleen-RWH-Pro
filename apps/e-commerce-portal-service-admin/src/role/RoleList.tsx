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
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const RoleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Roles"}
      perPage={50}
      pagination={<Pagination />}
    >
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
        <TextField label="Procurement Manager" source="procurementManager" />
        <TextField label="Sales Representative" source="salesRepresentative" />
        <TextField label="System Administrator" source="systemAdministrator" />
        <TextField label="Technician" source="technician" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
