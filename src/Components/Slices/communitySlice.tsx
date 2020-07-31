// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

//TODO REMOVE DUPLICATE STATE
export const communitySlice = createSlice({
  name: "community",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    addApartment: (state, action) => {
      const nextState = produce(state, (draft) => {
        const communityToUpdate = draft.map((com) => {
          if (com.communityName === action.payload.community) {
            com.apartments.push(action.payload.apartment);
          }
          return com;
        });
      });
      return nextState;
    },
    removeApartment: (state, action) => {
      const nextState = produce(state, (draft) => {
        const communityToUpdate = draft.map((com) => {
          if (com.communityName === action.payload.community) {
            com.apartments = com.apartments.filter(
              (apart) => apart != action.payload.apartment
            );
          }
          return com;
        });
      });
      return nextState;
    },
  },
});
