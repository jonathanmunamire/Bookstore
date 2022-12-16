import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../redux/books/books';
import './form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    if (author === '' || title === '' || category === '') {
      return false;
    }
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
    return true;
  };

  const Err = () => {
    if (author === '' || title === '' || category === '') {
      return false;
    } return true;
  };

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const authorInput = (e) => {
    setAuthor(e.target.value);
  };

  const add = (e) => {
    setCategory(e.target.value);
  };

  return (
    <section>
      <div>
        <Err />
      </div>
      <h1 className="form-section-title">ADD NEW BOOK</h1>
      <form className="form" onSubmit={addNewBook}>
        <input className="form-input" type="text" placeholder="Title" onChange={titleInput} value={title} />
        <input className="form-input" type="text" placeholder="Author" onChange={authorInput} value={author} />
        <select className="form-select" name="select" onChange={add}>
          <option value="categories" selected disabled>Categories</option>
          <option>Fantasy</option>
          <option>Emotional</option>
          <option>Drama</option>
          <option>Romance</option>
          <option>Sci-Fi</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Thriller</option>
          <option>Animation</option>
          <option>Crime</option>
          <option>Horror</option>
        </select>
        <button className="form-button" type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default Form;
