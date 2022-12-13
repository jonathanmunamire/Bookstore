import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  return (
    <div>
      <div>
        {title}
        {' '}
        by
        {' '}
        {author}
      </div>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
