import { createSlice } from '@reduxjs/toolkit';
const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459 12 56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443 89 12' },
  { id: 'id-3', name: 'Eden Clements', number: '645 17 79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227 91 26' },
];

const initialState = {
  contacts: contactsList,
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addContacts(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContacts, deleteContacts, filterContacts } =
  contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
//
//
//
//
//
//
//
//
//
//

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem('contactList')) || contactsList,
//   filter: '',
// };

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'contacts/filteredContacts': {
//       return { ...state, filter: action.payload };
//     }
//     default:
//       return state;
//   }
// };

// export const addContactsAction = payload => {
//   return { type: 'contacts/addContact', payload };
// };

// export const deleteContactsAction = payload => {
//   return {
//     type: 'contacts/deleteContact',
//     payload,
//   };
// };

// export const filterContactsAction = payload => {
//   return {
//     type: 'contacts/filteredContacts',
//     payload,
//   };
// };
