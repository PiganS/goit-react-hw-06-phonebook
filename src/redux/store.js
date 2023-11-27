import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contacts/contacts.reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  contactsStore: contactsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
