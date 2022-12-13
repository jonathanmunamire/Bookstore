import { combineReducers, createStore } from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const myReducers = combineReducers({
  bookReducer,
  statusReducer,
});

const store = createStore(myReducers);

export default store;
