import { useDispatch, useSelector } from 'react-redux';
import { ButtonDel, Contact, ContactText } from './ContactList.styled';
import { deleteContacts } from 'redux/contacts/contacts.reducer';
import { selectorContacts, selectorFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleDeleteProduct = id => {
    dispatch(deleteContacts(id));
  };

  const filterElements = contacts => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterElements(contacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactText>
            {contact.name}: {contact.number}
          </ContactText>
          <ButtonDel
            onClick={() => handleDeleteProduct(contact.id)}
            type="button"
          >
            Delete
          </ButtonDel>
        </Contact>
      ))}
    </ul>
  );
};
