import { useDispatch, useSelector } from 'react-redux';
import { category } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categories);

  const statusCheck = () => {
    dispatch(category());
  };
  return (
    <>
      <button type="button" onClick={statusCheck}>Check status</button>
      <span>{status}</span>
    </>
  );
};
export default Categories;
