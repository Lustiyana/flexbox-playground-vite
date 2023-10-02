import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
  name: "select",
  initialState: {
    flexDirection: "",
    flexWrap: "",
    justifyContent: "",
    alignItems: "",
    alignContent: "",
  },
  reducers: {
    handleChange: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    onClearContainer: (state) => {
      state.flexDirection = "row";
      state.flexWrap = "no-wrap";
      state.justifyContent = "flex-start";
      state.alignItems = "flex-start";
      state.alignContent = "flex-start";
    },
  },
});

export const { handleChange, onClearContainer } = selectSlice.actions;

export default selectSlice.reducer;
