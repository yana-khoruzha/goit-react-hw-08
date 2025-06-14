import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <p className={style.status}>Loading contacts...</p>}
      {error && <p className={style.status}>Error: {error}</p>}

      {!loading && !error && (
        <ul className={style.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
