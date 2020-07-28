// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

export const communitySlice = createSlice({
  name: "community",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
  },
});
