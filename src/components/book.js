import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const deleted = () => {
    dispatch(removeBook(id));
  };

  return (
    <section>
      <div>
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
        <div>
          <span />
          <button type="button" onClick={deleted}>Remove</button>
          <span />
        </div>
      </div>
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
