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
      <div className="single-book">
        <div className="section-one">
          <div>
            <p>{category}</p>
            <p>{title}</p>
            <p>{author}</p>
          </div>
          <div>
            <button type="button">Comments</button>
            <button type="button" onClick={deleted}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="section-two">
          <div>icon</div>
          <div>
            <p>64%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="section-three">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
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
