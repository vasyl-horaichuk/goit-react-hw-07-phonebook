import { ContactForm } from './ContactForm/ContactFrom';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <div>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
};
