import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

combineReducers({
  bookReducer,
  statusReducer,
});

const store = configureStore(combineReducers);

export default store;
