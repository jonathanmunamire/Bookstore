import { shallowEqual, useSelector } from 'react-redux';
import React from 'react';
import Form from './form';
import Book from './book';

const Books = () => {
  const booksArray = useSelector((reducer) => reducer.bookReducer, shallowEqual);

  return (
    <div>
      <div>
        {booksArray.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
        <button type="button">Delete All</button>
      </div>
      <Form />
    </div>
  );
};

export default Books;
