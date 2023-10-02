import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    onAddItem: (state, action) => {
      const arr = [];
      for (let i = 1; i <= action.payload; i++) {
        arr.push(i);
      }
      state.value = arr;
    },
    onClearItem: (state) => {
      state.value = [];
    },
  },
});

export const { onAddItem, onClearItem } = counterSlice.actions;

export default counterSlice.reducer;
