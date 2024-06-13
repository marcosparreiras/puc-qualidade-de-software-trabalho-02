import { Datagrid, List, TextField } from "react-admin";

export const UserList = (data: { data: any[] }) => (
  <List>
    <Datagrid data={data.data} rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
    </Datagrid>
  </List>
);
