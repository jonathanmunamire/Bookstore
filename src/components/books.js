import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import Form from './form';
import { getBooks } from '../redux/books/books';
import './books.css';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="books-body">
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
