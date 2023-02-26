import { createSelector } from '@reduxjs/toolkit';

export const getFilterValue = state => state.filter;
export const getContacts = state => state.contacts;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  }
);
