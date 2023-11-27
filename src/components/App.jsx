import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Subtitle, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContacts,
  deleteContacts,
  filterContacts,
} from 'redux/contacts/contacts.reducer';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);

  const handleChange = e => {
    const value = e.currentTarget.value;

    dispatch(filterContacts(value));
  };

  const addsNewContact = newContact => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasDuplicates) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    dispatch(addContacts(newContact));
  };

  const filterElements = contacts => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteProduct = id => {
    dispatch(deleteContacts(id));
  };

  const filteredContacts = filterElements(contacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addsNewContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={handleChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteProduct={handleDeleteProduct}
      />
    </Container>
  );
};
