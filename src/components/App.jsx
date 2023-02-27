// import { ContactForm } from './ContactForm/ContactFrom';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Title } from './Title/Title';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { fetchContacts } from '../redux/operation';

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, isLoading, error } = useSelector(getContacts);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані
  return (
    <div>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
    // <div>
    //   <Title title="Phonebook" />
    //   <ContactForm />
    //   <Title title="Contacts" />
    //   <Filter />
    //   <ContactList />
    // </div>
  );
};
