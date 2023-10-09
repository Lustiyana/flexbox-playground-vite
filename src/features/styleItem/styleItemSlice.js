import { createSlice } from "@reduxjs/toolkit";

export const styleItemSlice = createSlice({
  name: "styleitem",
  initialState: {
    boxes: [],
    openItem: false,
    selectedId: 0,
  },
  reducers: {
    handleClickItem: (state, action) => {
      const boxObj = {
        index: action.payload,
        styles: { alignSelf: "", shrink: "", grow: "", order: "", basis: "" },
      };
      const existObj = state.boxes.find(
        (item) => item.index === action.payload
      );
      if (!existObj) {
        state.boxes.push(boxObj);
      }
      state.selectedId = action.payload;
      state.openItem = true;
    },
    handleClickClose: (state, action) => {
      state.openItem = false;
    },
    changeItemStyles: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      const index = action.payload.index;

      const tempArr = state.boxes;
      const tempObj = tempArr.find((item) => item.index === index);
      tempObj.styles = {
        ...tempObj.styles,
        [name]: value,
      };

      state.boxes = tempArr;
    },
    clearStyleItem: (state) => {
      state.boxes = [];
    },
  },
});

export const {
  handleClickItem,
  handleClickClose,
  changeItemStyles,
  clearStyleItem,
} = styleItemSlice.actions;

export default styleItemSlice.reducer;
