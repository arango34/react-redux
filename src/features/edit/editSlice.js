import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setInput } from '../input/inputSlice';

const initialState = {
  isEditing: false,
  editId: null,
  editVal: '',
};

export const setEditInput = createAsyncThunk(
  'edit/setEditInput',
  async (val, thunkAPI) => {
    try {
      return thunkAPI.dispatch(setInput(val));
    } catch (error) {
      console.log(error);
    }
  }
);

export const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setIsEditing: (state) => {
      state.isEditing = true;
    },
    setIsEditingFalse: (state) => {
      state.isEditing = false;
    },
    setEditId: (state, { payload }) => {
      console.log(payload);
      state.editId = payload;
    },
    setEditVal: (state, { payload }) => {
      state.editVal = payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(setEditInput.fulfilled, () => {});
  },
});

export const { setIsEditing, setEditId, setIsEditingFalse, setEditVal } =
  editSlice.actions;

export default editSlice.reducer;
