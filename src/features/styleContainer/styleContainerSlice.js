import { createSlice } from "@reduxjs/toolkit";

export const styleContainerSlice = createSlice({
  name: "stylecontainer",
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
      state.flexDirection = "";
      state.flexWrap = "";
      state.justifyContent = "";
      state.alignItems = "";
      state.alignContent = "";
    },
  },
});

export const { handleChange, onClearContainer } = styleContainerSlice.actions;

export default styleContainerSlice.reducer;
