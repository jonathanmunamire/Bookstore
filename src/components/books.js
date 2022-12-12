import React from 'react';
import Form from './form';
import Book from './book';

const Books = () => {
  const name = 'Harry Potter';
  const author = 'J.K Rowling';
  return (
    <div>
      <div>
        <Book name={name} author={author} />
        <button type="button">Delete All</button>
      </div>
      <Form />
    </div>
  );
};

export default Books;
