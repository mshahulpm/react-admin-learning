import { useRecordContext } from 'react-admin';


export default function CustomName({ name }: { name: string }) {

    const record = useRecordContext();

    return record ? (
        <p>{record[name]}</p>
    ) : null
}
