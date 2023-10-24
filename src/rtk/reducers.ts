import { combineReducers } from "@reduxjs/toolkit";
import { elementReducer } from "./slices/elementSlices";

const rootReducer = combineReducers({
  elements: elementReducer,
});

export default rootReducer;
