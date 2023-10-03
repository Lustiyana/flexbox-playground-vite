import { createSlice } from "@reduxjs/toolkit";

export const codeSlice = createSlice({
  name: "code",
  initialState: {
    openCode: false,
    copiedCode: "",
  },
  reducers: {
    handleOpenCode: (state, action) => {
      state.openCode = action.payload;
    },
    handleCodeCopy: (state, action) => {
      navigator.clipboard.writeText(action.payload);
      alert("Text copied!");
    },
  },
});

export const { handleOpenCode, handleCodeCopy } = codeSlice.actions;

export default codeSlice.reducer;
