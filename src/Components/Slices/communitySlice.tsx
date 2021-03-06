// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { arrayRemoveItemOnce } from "src/utils";

export const communitySlice = createSlice({
  name: "community",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => {
      const nextState = produce(state, (draft) => {
        draft = draft.filter((com) => {
          return com.communityName !== action.payload.communityName;
        });
        return draft;
      });
      return nextState;
    },

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
            com.apartments.apartment[action.payload.id].rooms.push(
              action.payload.apartment
            );
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
    removeRoom: (state, action) => {
      const nextState = produce(state, (draft) => {
        const communityToUpdate = draft.map((com) => {
          if (com.communityName === action.payload.community) {
            com.apartments.apartment.map((ap) => {
              if (ap.apartment === action.payload.apartment) {
                ap.rooms = arrayRemoveItemOnce(ap.rooms, action.payload.room);
              }
            });
          }
        });
      });
      return nextState;
    },
  },
});
