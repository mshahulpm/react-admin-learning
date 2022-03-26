import * as React from "react";
import { Admin, Resource } from 'react-admin';
import UserList from './components/users';
import { PostList } from "./components/posts";
import { PostEdit, PostCreate } from "./components/EditPost";
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./components/Dashboard";
import authProvider from './authprovider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name='users' list={UserList} icon={UserIcon} />
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
)

export default App;