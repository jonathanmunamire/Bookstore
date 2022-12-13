import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const abc = useRef(null);
  const def = useRef(null);
  return (
    <form>
      <input type="text" placeholder="book title" ref={abc} />
      <input type="text" placeholder="author name" ref={def} />
      <button
        type="button"
        onClick={() => {
          if (abc.current.value && def.current.value) {
            dispatch(addBook(abc.current.value, def.current.value));
            abc.current.value = '';
            def.current.value = '';
          }
        }}
      >
        Add Book
      </button>
    </form>
  );
};

export default Form;
