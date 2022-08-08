import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../features/list/listSlice';
import inputReducer from '../features/input/inputSlice';
import editReducer from '../features/edit/editSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    input: inputReducer,
    edit: editReducer,
  },
});
