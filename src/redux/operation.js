import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63fb9feb6deb8bdb81488c5c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);
