import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operation';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.playload;
    },

    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.playload;
    },

    // addContact(state, action) {
    //   state.push(action.payload);
    // },
    // deleteContact(state, action) {
    //   const index = state.findIndex(contact => contact.id === action.payload);
    //   state.splice(index, 1);
    // },
  },
});

// export const { addContact, deleteContact} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
