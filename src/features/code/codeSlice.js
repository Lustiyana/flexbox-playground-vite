import { createSlice } from "@reduxjs/toolkit";

export const codeSlice = createSlice({
  name: "code",
  initialState: {
    openCode: false,
  },
  reducers: {
    handleOpenCode: (state, action) => {
      state.openCode = action.payload;
    },
  },
});

export const { handleOpenCode } = codeSlice.actions;

export default codeSlice.reducer;
