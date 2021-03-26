import { useState } from 'react';

export default function AddContact({ onSave, isOpened, toggleModal}) {
    const [ contact, setContact ] = useState({
        name: '',
        surname: '',
        phone: ''
    })

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(contact);
        setContact({name: '', surname: '', phone: ''});
    }

    function onInputChange(e) {
        setContact({...contact, [e.target.name]: e.target.value })
    }

    function onCancelClick(e) {
        e.preventDefault();
        setContact({name: '', surname: '', phone: ''});
        toggleModal();
    }

    return (
        <form
            className={`modal__wrapper ${isOpened ? 'open' : 'close'}`}
            onSubmit={onFormSubmit}>
            <div className='modal__body'>
                <div className='modal__inputs'>
                    <label>Name:</label>
                    <input
                        type="text"
                        name= "name"
                        value={contact.name}
                        onChange={onInputChange}
                    />
                    <label>Surname:</label>
                    <input
                        type="text"
                        name="surname"
                        value={contact.surname}
                        onChange={onInputChange}
                    />
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={contact.phone}
                        onChange={onInputChange}
                    />
                </div>
                <div className='modal__btns'>
                    <button className="save" onClick={toggleModal}>Save</button>
                    <button className="cancel" onClick={onCancelClick}>Cancel</button>
                </div>
            </div>
        </form>
    )
}