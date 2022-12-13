import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const statusArray = useSelector((reducer) => reducer.statusReducer, shallowEqual);

  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <p>{statusArray.map((el) => el.payload)}</p>
    </div>
  );
};

export default Categories;
