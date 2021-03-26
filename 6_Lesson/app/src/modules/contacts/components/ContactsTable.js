import ContactsRow from './ContactsRow';

export default function ContactsTable({ list, onDelete, toggleModal}) {
    return (
        <>
            <h2>Contacts book</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, id) => (
                    <ContactsRow
                        key={id}
                        item={item}
                        onDelete={onDelete}
                    ></ContactsRow>
                ))}
                </tbody>
            </table>
            <button className="add-contact" onClick={toggleModal}>ADD</button>
        </>
    )
}