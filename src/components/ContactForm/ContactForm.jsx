import { nanoid } from 'nanoid';
import { Button, Form, Input } from './ContactForm.styled';
import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
          required
        />
      </label>

      <label>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Enter number"
          value={number}
          onChange={handleChange}
          pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
          required
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
