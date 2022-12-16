import { useDispatch, useSelector } from 'react-redux';
import { category } from '../redux/categories/categories';
import './categories.css';

const Categories = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categories);

  const statusCheck = () => {
    dispatch(category());
  };
  return (
    <div className="categories-body">
      <div className="status-section">
        <button className="status-button" type="button" onClick={statusCheck}>Check status</button>
        <span className="status">{status}</span>
      </div>
    </div>
  );
};
export default Categories;
