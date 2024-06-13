import { Create, PasswordInput, SimpleForm, TextInput } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);
