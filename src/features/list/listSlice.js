import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const setList = createAsyncThunk('list/setList', async (_, thunkAPI) => {
  try {
    const { input } = thunkAPI.getState();
    return input.input;
  } catch (error) {
    console.log(error);
  }
});

export const editItem = createAsyncThunk(
  'list/editItem',
  async (_, thunkAPI) => {
    try {
      const { input } = thunkAPI.getState();
      const { edit } = thunkAPI.getState();
      return { input: input.input, editId: edit.editId };
    } catch (error) {
      console.log(error);
    }
  }
);

export const listSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    removeItem: (state, { payload }) => {
      state.list = state.list.filter((item) => item.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setList.fulfilled, (state, { payload }) => {
        state.list = [...state.list, { id: Math.random(), val: payload }];
      })
      .addCase(editItem.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.list = state.list.map((item) => {
          item.id === payload.editId && (item.val = payload.input);
          return item;
        });
      });
  },
});

export const { removeItem } = listSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default listSlice.reducer;
