import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { name, author } = props;
  return (
    <div>
      <div>
        {name}
        {' '}
        by
        {' '}
        {author}
      </div>
      <button type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
