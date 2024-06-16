import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { PermissionTitle } from "../permission/PermissionTitle";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Business Analyst" source="businessAnalyst" />
        <TextInput label="Business Manager" source="businessManager" />
        <TextInput label="CEO" source="ceo" />
        <TextInput label="Contracts Manager" source="contractsManager" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput
          label="Customer Service Representative"
          source="customerServiceRepresentative"
        />
        <TextInput label="description" multiline source="description" />
        <TextInput label="Inventory Manager" source="inventoryManager" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="permissions"
          reference="Permission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PermissionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Procurement Manager" source="procurementManager" />
        <TextInput label="Sales Representative" source="salesRepresentative" />
        <TextInput label="System Administrator" source="systemAdministrator" />
        <TextInput label="Technician" source="technician" />
      </SimpleForm>
    </Edit>
  );
};
