import { Edit, PasswordInput, SimpleForm, TextInput } from "react-admin";

export function UserEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
        <PasswordInput source="oldPassword" />
        <PasswordInput source="newPassword" />
      </SimpleForm>
    </Edit>
  );
}
