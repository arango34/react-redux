import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/list/listSlice';
import {
  setIsEditing,
  setEditId,
  setIsEditingFalse,
  setEditInput,
} from '../features/edit/editSlice';
import { clearInput, setInput } from '../features/input/inputSlice';

import './ListItem.css';

const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li className='list-item'>
      <h3>{item.val}</h3>
      <div className='btn-container'>
        <button
          className='btn btn-edit'
          onClick={() => {
            dispatch(setIsEditing());
            dispatch(setEditId(item.id));
            dispatch(setInput(item.val));
            // dispatch(setEditInput(item.val));
          }}
        >
          Edit
        </button>
        <button
          className='btn btn-delete'
          onClick={() => {
            dispatch(removeItem(item.id));
            dispatch(clearInput());
            dispatch(setIsEditingFalse());
            dispatch(setEditId(null));
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default ListItem;
