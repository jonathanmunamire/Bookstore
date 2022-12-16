import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './book.css';

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
          <div className="one-one">
            <p className="p category">{category}</p>
            <p className="p title">{title}</p>
            <p className="p author">{author}</p>
          </div>
          <div className="one-two">
            <button type="button">Comments</button>
            <div className="vertical-line-one" />
            <button type="button" onClick={deleted}>Remove</button>
            <div className="vertical-line-one" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="section-two-three">
          <div className="section-two">
            <p className="round" />
            <div className="two-two">
              <p className="percentage">75%</p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="section-three">
            <p>CURRENT CHAPTER</p>
            <p>Chapter 17</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
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
