import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField, ListProps } from 'react-admin';
import MyUrlField from "./myUrlField";
import CustomName from "./customName";

export default function UserList(props: ListProps) {

    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <CustomName name="name" />
            {/* <TextField source="username" /> */}
            <EmailField source="email" />
            {/* <TextField source="address.street" /> */}
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>)
}