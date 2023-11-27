import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Subtitle, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);

  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const addsNewContact = newContact => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasDuplicates) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    const addContactsAction = {
      type: 'contacts/addContact',
      payload: newContact,
    };
    dispatch(addContactsAction);
  };

  const filterElements = contacts => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteProduct = id => {
    const deleteContactsAction = {
      type: 'contacts/deleteContact',
      payload: id,
    };
    dispatch(deleteContactsAction);
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
