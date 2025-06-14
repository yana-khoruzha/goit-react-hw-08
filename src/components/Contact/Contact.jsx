import { MdPerson, MdPhone } from 'react-icons/md';
import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={style.contactCard}>
      <div className={style.contactInfo}>
        <p className={style.contactItem}>
          <span className={style.contactIcon}>
            <MdPerson />
          </span>
          {name}
        </p>
        <p className={style.contactItem}>
          <span className={style.contactIcon}>
            <MdPhone />
          </span>
          {number}
        </p>
      </div>
      <button className={style.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
