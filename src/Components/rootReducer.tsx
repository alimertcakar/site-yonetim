// @ts-nocheck
import { combineReducers } from "redux";
import { communitySlice } from "./Slices/communitySlice";

export const rootReducer = combineReducers({
  community: communitySlice.reducer,
});
