import { configureStore } from "@reduxjs/toolkit";
import codeReducer from "../features/code/codeSlice";
import counterReducer from "../features/counter/counterSlice";
import selectReducer from "../features/select/selectSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    select: selectReducer,
    code: codeReducer,
  },
});
