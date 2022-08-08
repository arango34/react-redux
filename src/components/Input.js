import { useSelector, useDispatch } from 'react-redux';
import { setInput, clearInput } from '../features/input/inputSlice';
import { setList, editItem } from '../features/list/listSlice';
import { setEditId, setIsEditingFalse } from '../features/edit/editSlice';

import './Input.css';

const Input = () => {
  const { input } = useSelector((state) => state.input);
  const { isEditing } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setInput(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    if (isEditing) {
      dispatch(editItem());
      dispatch(setIsEditingFalse());
      dispatch(setEditId(null));
      dispatch(clearInput());
    } else {
      dispatch(setList());
      dispatch(clearInput());
    }
  };

  return (
    <form className='input-container' onSubmit={handleSubmit}>
      <label htmlFor='input'>Enter Todo: </label>
      <input
        type='text'
        name='input'
        className='form-input'
        value={input}
        onChange={handleChange}
      />
      <button type='submit' className='btn-input'>
        {isEditing ? 'Edit' : 'Submit'}
      </button>
    </form>
  );
};

export default Input;
