import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { DataProviderProxy } from "./utils/data-provider-proxy";
import { UserEdit } from "./components/UserEdit";
import { UserList } from "./components/UserList";
import { UserCreate } from "./components/UserCreate";
import { UserShow } from "./components/UserShow";

export const App = () => {
  const dataProvider = jsonServerProvider("http://localhost:3333");
  const dataProviderProxy = new DataProviderProxy(dataProvider);

  return (
    <Admin dataProvider={dataProviderProxy}>
      <Resource
        name="users"
        edit={UserEdit}
        list={UserList}
        create={UserCreate}
        show={UserShow}
      />
    </Admin>
  );
};
