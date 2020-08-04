// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

export const communitySlice = createSlice({
  name: "community",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    addApartment: (state, action) => {
      const nextState = produce(state, (draft) => {
        const communityToUpdate = draft.map((com) => {
          if (com.communityName === action.payload.community) {
            com.apartments.apartment.push({
              apartment: action.payload.apartment,
              rooms: [],
            });
          }
          return com;
        });
      });
      return nextState;
    },
    addApartmentRoom: (state, action) => {
      const nextState = produce(state, (draft) => {
        const communityToUpdate = draft.map((com) => {
          if (com.communityName === action.payload.community) {
            com.apartments.apartment[0].rooms.push(action.payload.apartment);
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
            com.apartments.apartment = com.apartments.apartment.filter(
              (apart) => apart.apartment != action.payload.apartment
            );
          }
          return com;
        });
      });
      return nextState;
    },
  },
});
