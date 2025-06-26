// IMPORTS
import type { PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";

export const appReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const rootReducer = (state: any, action: PayloadAction) => {
  if (action.type === "RESET") {
    state = undefined;
  }
  return appReducer(state, action);
};
