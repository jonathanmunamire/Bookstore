import { useSelector } from 'react-redux';
import React from 'react';
import Form from './form';
import Book from './book';

const Books = () => {
  const booksArray = useSelector((state) => state);
  return (
    <div>
      <div>
        <Book arr={booksArray} />
        <button type="button">Delete All</button>
      </div>
      <Form />
    </div>
  );
};

export default Books;
