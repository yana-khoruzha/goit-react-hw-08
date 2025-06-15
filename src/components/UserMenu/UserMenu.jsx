import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { clearContacts } from '../../redux/contacts/slice';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearContacts()); 
  };

  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogout} className={css.logoutBtn}>Logout</button>
    </div>
  );
}
