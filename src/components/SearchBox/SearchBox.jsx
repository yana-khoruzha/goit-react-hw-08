import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import style from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={style.searchbox}>
      <label htmlFor="nameInput" className={style.label}>
        Find contacts by name
      </label>
      <input
        id="nameInput"
        className={style.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}
