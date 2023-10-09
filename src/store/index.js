import { configureStore } from "@reduxjs/toolkit";
import codeReducer from "../features/code/codeSlice";
import counterReducer from "../features/counter/counterSlice";
import styleContainerReducer from "../features/styleContainer/styleContainerSlice";
import styleItemReducer from "../features/styleItem/styleItemSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    stylecontainer: styleContainerReducer,
    code: codeReducer,
    styleitem: styleItemReducer,
  },
});
