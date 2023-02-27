import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://63fb9feb6deb8bdb81488c5c.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('/contacts');
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
    // Обробка помилки
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
