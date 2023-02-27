import { createSlice } from '@reduxjs/toolkit';

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
  // Об'єкт редюсерів
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },

    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.action = action.payload;
    },

    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
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

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
