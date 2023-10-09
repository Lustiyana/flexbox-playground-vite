import { createSlice } from "@reduxjs/toolkit";

export const codeSlice = createSlice({
  name: "code",
  initialState: {
    openCode: false,
    copiedCode: "",
    copyCSS: false,
    copyHTML: false,
  },
  reducers: {
    handleOpenCode: (state, action) => {
      state.openCode = action.payload;
    },
    handleCodeCopy: (state, action) => {
      navigator.clipboard.writeText(action.payload.code);
      state[action.payload.name] = action.payload.value;
    },
    handleClearCopy: (state, action) => {
      state.copyCSS = false;
      state.copyHTML = false;
    },
  },
});

export const {
  handleOpenCode,
  handleCodeCopy,
  handleCopyButton,
  handleClearCopy,
} = codeSlice.actions;

export default codeSlice.reducer;
