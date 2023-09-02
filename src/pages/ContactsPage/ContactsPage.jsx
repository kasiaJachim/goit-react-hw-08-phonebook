import { useSelector } from 'react-redux';

import FormPhonebook from 'components/FormPhonebook/FormPhonebook';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList.jsx/ContactList';
import { getIsLoggedIn } from 'redux/selectors';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    isLoggedIn && (
      <div className={css.wrapper}>
        <h1 className={css.titlePhone}>Phonebook</h1>
        <FormPhonebook />
        <h2 className={css.titleCont}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
  );
};
export default ContactsPage;
