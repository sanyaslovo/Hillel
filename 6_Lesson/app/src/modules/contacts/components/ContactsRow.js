export default function ContactsRow({ item, onDelete }) {
    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(item.id);
    }
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.phone}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}