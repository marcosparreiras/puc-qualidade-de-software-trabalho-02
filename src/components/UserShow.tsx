import { EmailField, Show, SimpleShowLayout, TextField } from "react-admin";

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);
