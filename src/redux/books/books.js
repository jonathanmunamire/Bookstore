const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];
const bookId = 0;

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  id: bookId + 1,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.input,
          author: action.author,
        },
      ];

    case REMOVE_BOOK:
      return state.map((book) => (book.id !== action.id));

    default:
      return state;
  }
};

export default bookReducer;
