import { combineReducers } from "redux";
import { communitySlice } from "./Slices/CommunitySlice";

export const rootReducer = combineReducers({
  community: communitySlice.reducer,
});
