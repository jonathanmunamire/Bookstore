const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: '',
});

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        {
          payload: 'Under Construction',
        },
      ];

    default:
      return state;
  }
};

export default statusReducer;
