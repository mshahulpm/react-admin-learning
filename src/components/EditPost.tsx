import {
    EditProps,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    CreateProps,
    Record,
    useRecordContext
} from 'react-admin';

const PostTitle = ({ record }: { record: Record }) => {
    return <span>Post {record ? record.title : ""}</span>
}

export const PostEdit = (props: EditProps) => {

    const record = useRecordContext()

    return (
        <Edit title={<PostTitle record={record} />} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Edit>
    )
};


export const PostCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);