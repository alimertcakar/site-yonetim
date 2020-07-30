// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

//TODO REMOVE DUPLICATE STATE
export const communitySlice = createSlice({
  name: "community",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    addApartment: (state, action) => {
      const communityToUpdate = state.find((coms) => {
        return coms.communityName === action.payload.community;
      });
      let newState = {
        ...communityToUpdate,
        apartments: [action.payload.apartment],
      };
      return [...state, newState];
    },
  },
});
