import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, { payload }) => {
      state.input = payload;
    },
    clearInput: (state) => {
      state.input = '';
    },
  },
});

export const { setInput, clearInput } = inputSlice.actions;

export default inputSlice.reducer;
